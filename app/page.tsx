import AriaButton from "@/components/ui/button";
import { SaveIcon } from "@/public/icons";

export default function Home() {
  return (
    <main className="size-screen h-screen flex items-center justify-center">
      <AriaButton leftIcon={<SaveIcon />} rightIcon={<SaveIcon />}>
        Button CTA
      </AriaButton>
    </main>
  );
}
