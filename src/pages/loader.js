import Loader from "@/components/Loader"
import BlankLayout from "@/layouts/BlankLayout"

function Loaders() {
  return <Loader />
}

Loaders.getLayout = (page) => <BlankLayout>{page}</BlankLayout>
export default Loaders
