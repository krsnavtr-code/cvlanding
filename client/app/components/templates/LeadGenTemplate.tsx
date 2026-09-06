interface LeadGenTemplateProps {
    content: Record<string, any>;
}

export default function LeadGenTemplate({ content }: LeadGenTemplateProps) {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center p-6 text-center"
            style={{ backgroundColor: content.backgroundColor || '#f8fafc' }}
        >
            <h1
                className="text-4xl font-bold mb-4"
                style={{ color: content.headingColor || '#111827' }}
            >
                {content.heading || 'Welcome'}
            </h1>
            <p
                className="text-lg mb-8 max-w-xl"
                style={{ color: content.textColor || '#4b5563' }}
            >
                {content.subheading || ''}
            </p>
            <form
                className="flex flex-col gap-3 w-full max-w-sm"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border p-3 rounded"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border p-3 rounded"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="border p-3 rounded"
                />
                <button
                    type="submit"
                    className="py-3 px-6 rounded text-white font-semibold"
                    style={{ backgroundColor: content.themeColor || '#2563eb' }}
                >
                    {content.buttonText || 'Submit'}
                </button>
            </form>
        </div>
    );
}
