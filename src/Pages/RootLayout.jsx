import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import BackgroundGradient from "../Components/UI/BackgroundGradient";
import BannerSection from "../Components/UI/BannerSection";

export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <div className="page page_wrap">
      <BackgroundGradient />
      <div className="container">
        <MainNavigation />
        {navigation.state === "loading" ? "Loading..." : ""}
        <main>
          <BannerSection />
          <div className="card-inner animated active" id="card-home">
            <div className="card-wrap">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
