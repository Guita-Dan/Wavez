import Container from "../components/Container";
import Link from "next/link";

const Custom404 = () => {
    return (
        <Container className="flex h-full justify-center">
            <div className="flex flex-col items-center">
                <p className="font-display text-4xl font-semibold sm:text-5xl">
                    404
                </p>
                <h1 className="mt-4 font-display text-2xl font-semibold ">
                    Page not found
                </h1>
                <p className="mt-2 text-sm">
                    Sorry, we could ont find the page you are looking for.
                </p>
                <Link
                    href="/"
                    className="mt-4 text-sm font-semiboldtransition hover:text-neutral-700"
                >
                    Go to the home page
                </Link>
            </div>
        </Container>
    );
};

export default Custom404;