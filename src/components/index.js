import { lazy } from "react";

// Theme Button
const ThemeButton = lazy(() => import("./ThemeButton/ThemeButton.jsx"));
// Loader
const Loader = lazy(() => import("./Loader/Loader.jsx"));
// Accordian
const Accordian = lazy(() => import("./Accordian/Accordian.jsx"));
// Star Rating
const StarRating = lazy(() => import("./StarRating/StarRating.jsx"));
// Random Color Generator
const RandomColorGenerator = lazy(() =>
  import("./RandomColorGenerator/RandomColorGenerator.jsx")
);
// Image Slider
const ImageSlider = lazy(() => import("./ImageSlider/ImageSlider.jsx"));
// Product List
const ProductList = lazy(() => import("./ProductList/ProductList.jsx"));
// Side Navbar
const SideNav = lazy(() => import("./SideNav/SideNav.jsx"));
// QR Code Generator
const QRCodeGenerator = lazy(() =>
  import("./QRCodeGenerator/QRCodeGenerator.jsx")
);
// Scrollbar Indicator
const ScrollbarIndicator = lazy(() =>
  import("./ScrollbarIndicator/ScrollbarIndicator.jsx")
);
// Custom Tabs
const CustomTabs = lazy(() => import("./CutomTabs/CustomTabs.jsx"));
// Custom Popup
const CustomPopup = lazy(() => import("./CustomPopup/CustomPopup.jsx"));
// Github User Finder
const GithubUserFinder = lazy(() =>
  import("./GithubUserFinder/GithubUserFinder.jsx")
);
// Autocomplete
const Autocomplete = lazy(() => import("./Autocomplete/Autocomplete.jsx"));
// TicTacToe
const TicTacToe = lazy(() => import("./TicTacToe/TicTacToe.jsx"));

export {
  ThemeButton,
  Loader,
  Accordian,
  StarRating,
  RandomColorGenerator,
  ImageSlider,
  ProductList,
  SideNav,
  QRCodeGenerator,
  ScrollbarIndicator,
  CustomTabs,
  CustomPopup,
  GithubUserFinder,
  Autocomplete,
  TicTacToe,
};
