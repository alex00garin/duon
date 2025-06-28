import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

interface ProductInterestCounts {
  [productId: string]: number;
}

interface UserInterests {
  [productId: string]: boolean;
}

const fetchInterestCounts = async (): Promise<ProductInterestCounts> => {
  const { data: counts } = await supabase
    .from("product_interest")
    .select("product_id");

  const countsMap: ProductInterestCounts = {};
  counts?.forEach(item => {
    countsMap[item.product_id] = (countsMap[item.product_id] || 0) + 1;
  });

  return countsMap;
};

const fetchUserInterests = async (
  userSession: string
): Promise<UserInterests> => {
  if (!userSession) return {};

  const { data: userData } = await supabase
    .from("product_interest")
    .select("product_id")
    .eq("user_session", userSession);

  const userInterestsMap: UserInterests = {};
  userData?.forEach(item => {
    userInterestsMap[item.product_id] = true;
  });

  return userInterestsMap;
};

const toggleProductInterest = async ({
  productId,
  userSession,
  isCurrentlyInterested,
}: {
  productId: string;
  userSession: string;
  isCurrentlyInterested: boolean;
}) => {
  if (isCurrentlyInterested) {
    await supabase
      .from("product_interest")
      .delete()
      .eq("product_id", productId)
      .eq("user_session", userSession);
  } else {
    await supabase.from("product_interest").insert({
      product_id: productId,
      user_session: userSession,
    });
  }

  return { productId, isCurrentlyInterested };
};

export function useProductInterest() {
  const [userSession, setUserSession] = useState<string>("");
  const queryClient = useQueryClient();

  useEffect(() => {
    let sessionId = localStorage.getItem("duon-session-id");
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem("duon-session-id", sessionId);
    }
    setUserSession(sessionId);
  }, []);

  const { data: interestCounts = {}, isLoading: countsLoading } = useQuery({
    queryKey: ["product-interest-counts"],
    queryFn: fetchInterestCounts,
    staleTime: 30 * 1000, // 30 seconds
  });

  const { data: userInterests = {}, isLoading: userInterestsLoading } =
    useQuery({
      queryKey: ["user-interests", userSession],
      queryFn: () => fetchUserInterests(userSession),
      enabled: !!userSession,
      staleTime: 30 * 1000, // 30 seconds
    });

  const toggleMutation = useMutation({
    mutationFn: toggleProductInterest,
    onMutate: async ({ productId, isCurrentlyInterested }) => {
      await queryClient.cancelQueries({
        queryKey: ["product-interest-counts"],
      });
      await queryClient.cancelQueries({
        queryKey: ["user-interests", userSession],
      });

      const previousCounts = queryClient.getQueryData<ProductInterestCounts>([
        "product-interest-counts",
      ]);
      const previousUserInterests = queryClient.getQueryData<UserInterests>([
        "user-interests",
        userSession,
      ]);

      if (previousCounts) {
        queryClient.setQueryData<ProductInterestCounts>(
          ["product-interest-counts"],
          {
            ...previousCounts,
            [productId]: isCurrentlyInterested
              ? Math.max((previousCounts[productId] || 1) - 1, 0)
              : (previousCounts[productId] || 0) + 1,
          }
        );
      }

      if (previousUserInterests) {
        queryClient.setQueryData<UserInterests>(
          ["user-interests", userSession],
          {
            ...previousUserInterests,
            [productId]: !isCurrentlyInterested,
          }
        );
      }

      return { previousCounts, previousUserInterests };
    },
    onError: (_err, _variables, context) => {
      if (context?.previousCounts) {
        queryClient.setQueryData(
          ["product-interest-counts"],
          context.previousCounts
        );
      }
      if (context?.previousUserInterests) {
        queryClient.setQueryData(
          ["user-interests", userSession],
          context.previousUserInterests
        );
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["product-interest-counts"] });
      queryClient.invalidateQueries({
        queryKey: ["user-interests", userSession],
      });
    },
  });

  const toggleInterest = (productId: string) => {
    if (!userSession) return;

    const isCurrentlyInterested = userInterests[productId] || false;

    toggleMutation.mutate({
      productId,
      userSession,
      isCurrentlyInterested,
    });
  };

  const refetch = () => {
    queryClient.invalidateQueries({ queryKey: ["product-interest-counts"] });
    queryClient.invalidateQueries({
      queryKey: ["user-interests", userSession],
    });
  };

  return {
    interestCounts,
    userInterests,
    loading: countsLoading || userInterestsLoading || toggleMutation.isPending,
    toggleInterest,
    refetch,
  };
}
