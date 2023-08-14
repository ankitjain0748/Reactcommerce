import toast, { Toaster } from 'react-hot-toast';

function Header() {
    return (
        <section className="header">
            <Toaster  position="top-center" reverseOrder={false} />

        </section>
    );
}

export default Header;