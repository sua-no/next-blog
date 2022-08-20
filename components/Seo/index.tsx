import Head from "next/head";

interface SeoProps {
  title: string;
}

export const Seo = ({ title }: SeoProps) => {
  return (
    <Head>
      <title>Sua Blog | {title}</title>
    </Head>
  );
};
