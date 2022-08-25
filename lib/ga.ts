interface GtmVirtualPageViewProps {
  pageTypeName?: string;
  url: string;
}

export const gtmVirtualPageView = (rest: GtmVirtualPageViewProps) => {
  window.dataLayer?.push({
    event: 'VirtualPageView',
    ...rest,
  });
};
