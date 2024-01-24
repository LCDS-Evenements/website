import type { ReactElement } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/lib/components/ui/alert";
import { SparkleIcon } from "lucide-react";

const Home = (): ReactElement => {
  return (
    <Alert>
      <SparkleIcon className="h-4 w-4" />
      <AlertTitle>Lets dev!</AlertTitle>
      <AlertDescription>
        This is a template for NextJS projects, with lots of usefull stuff, by
        hcampos.
      </AlertDescription>
    </Alert>
  );
};

export default Home;