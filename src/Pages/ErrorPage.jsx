import { useRouteError } from "react-router-dom";
import PageContent from "../Components/UI/PageComponent";

export default function ErrorPage() {
  const error = useRouteError();
  let errorTitle = "An Error Occurred";
  let erorrMessage = "Something went wrong";

  if (error.status === 500) {
    erorrMessage = error.data.message;
  }

  if (error.status === 404) {
    errorTitle = "404:Not Found";
    erorrMessage = "Could not found!!!";
  }
  return (
    <PageContent title={errorTitle}>
      <p>{erorrMessage}</p>
    </PageContent>
  );
}
