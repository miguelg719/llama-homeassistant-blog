import Container from "@/app/_components/container";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-6 flex flex-col lg:flex-row items-center justify-between">
          <h3 className="text-xs font-small text-center lg:text-left lg:mb-0 order-2 lg:order-1">
            Built with Next.js
          </h3>
          <div className="flex flex-row gap-2 mb-4 lg:mb-0 items-center order-1 lg:order-2">
            <FontAwesomeIcon
              icon={faGithub}
              className="w-5 h-5 lg:w-7 lg:h-7 text-neutral-700 dark:text-neutral-200"
            />
            <a
              href={`https://github.com/miguelg719`}
              className="text-sm hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
