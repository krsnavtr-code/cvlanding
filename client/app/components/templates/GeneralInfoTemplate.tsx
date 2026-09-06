interface GeneralInfoTemplateProps {
    content: Record<string, any>;
}

export default function GeneralInfoTemplate({ content }: GeneralInfoTemplateProps) {
    return (
        <div
            className="min-h-screen p-6"
            style={{ backgroundColor: content.backgroundColor || '#ffffff' }}
        >
            <div className="max-w-3xl mx-auto">
                <h1
                    className="text-4xl font-bold mb-6"
                    style={{ color: content.headingColor || '#111827' }}
                >
                    {content.heading || 'Information'}
                </h1>
                {content.image && (
                    <img
                        src={content.image}
                        alt={content.heading || 'Hero image'}
                        className="w-full max-h-96 object-cover rounded mb-6"
                    />
                )}
                <div
                    className="prose max-w-none"
                    style={{ color: content.textColor || '#374151' }}
                >
                    {content.body || ''}
                </div>
            </div>
        </div>
    );
}
