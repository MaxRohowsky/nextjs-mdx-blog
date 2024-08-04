import styles from './imprint.module.scss'

export default function Imprint() {


    return (
        <>
            <div className="container mx-auto p-6">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold mb-4">Imprint</h1>

                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Company Information</h2>
                        <p>Company Name: <span className="font-medium">Example Company Ltd.</span></p>
                        <p>Address: <span className="font-medium">123 Example Street, City, Country</span></p>
                        <p>Phone: <span className="font-medium">+123 456 7890</span></p>
                        <p>Email: <a href="mailto:info@example.com" className="text-blue-500 hover:underline">info@example.com</a></p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Legal Information</h2>
                        <p>Registration Number: <span className="font-medium">123456789</span></p>
                        <p>VAT Number: <span className="font-medium">VAT123456</span></p>
                    </div>

                    <div className="mb-4">
                        <h2 className="text-xl font-semibold">Disclaimer</h2>
                        <p>Content on this website is for informational purposes only and does not constitute legal advice.</p>
                    </div>

                </div>
            </div>

        </>
    )
}