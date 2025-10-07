import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Works from "@/pages/Works";
import WorkDetails from "@/pages/WorkDetails";
import NotFound from "@/pages/NotFound";


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/works" element={<Works/>} />
        <Route path="/works/:slug" element={<WorkDetails/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
}