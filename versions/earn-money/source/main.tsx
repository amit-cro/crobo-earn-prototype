import { createRoot } from "react-dom/client"
import { MemoryRouter } from "react-router"
import { ThemeProvider } from "@/components/theme-provider"
import { EditorialDirection } from "@/prototypes/northstar-directions/EditorialDirection"
import "@/index.css"
import "@/design-system/crobo-design"
import "@/prototypes/northstar-directions/northstar-directions.css"

// Standalone design review. No app shell, authentication, analytics or services.
createRoot(document.getElementById("root")!).render(
  <ThemeProvider forcedTheme="light">
    <MemoryRouter><EditorialDirection /></MemoryRouter>
  </ThemeProvider>,
)
