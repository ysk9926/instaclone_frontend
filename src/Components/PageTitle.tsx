import { Helmet } from "react-helmet-async";

type Title = {
  title: string;
};

function PageTitle({ title }: Title) {
  return (
    <Helmet>
      <title>{title} | Instaclone</title>
    </Helmet>
  );
}

export default PageTitle;
