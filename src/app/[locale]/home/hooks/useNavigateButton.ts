import { useRouter } from "@/i18n/routing";
import { ROUTES_PATH } from "@/utils/enum/routes";
import { MenuProps } from "antd/lib";
import { useMemo } from "react";

const useNavigateRouteItems = () => {
  const router = useRouter();
  const items = useMemo(() => [
    {
      key: 'about',
      label: 'About',
      onClick: () => router.push(ROUTES_PATH.ABOUT)
    },
    {
      key: 'project',
      label: 'Project',
      onClick: () => router.push(ROUTES_PATH.PROJECT)
    },
    {
      key: 'social',
      label: 'Social',
      onClick: () => router.push(ROUTES_PATH.SOCIAL)
    },
    {
      key: 'blog',
      label: 'Blog',
      onClick: () => router.push(ROUTES_PATH.BLOG)
    }
  ], [router]);
  return items;
};

export default useNavigateRouteItems;