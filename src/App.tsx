import { Suspense, lazy, useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"

import { FadeArc } from "@/components/fade-arc"
import Footer from "@/components/footer"
import Header from "@/components/header"

const Engineering = lazy(() => import("@/pages/engineering"))
const Home = lazy(() => import("@/pages/home"))
const Research = lazy(() => import("@/pages/research"))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="mx-auto w-full max-w-[820px] flex-1 px-5 pb-14 pt-2 sm:px-10">
        <Suspense
          fallback={
            <div className="flex justify-center py-24">
              <FadeArc className="size-8 text-muted-foreground" />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/engineering" element={<Engineering />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
