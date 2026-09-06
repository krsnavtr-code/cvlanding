interface VideoLayoutTemplateProps {
    content: Record<string, any>;
}

export default function VideoLayoutTemplate({ content }: VideoLayoutTemplateProps) {
    return (
        <div
            className="min-h-screen p-6"
            style={{ backgroundColor: content.backgroundColor || '#0f172a' }}
        >
            <div className="max-w-4xl mx-auto">
                <h1
                    className="text-3xl font-bold mb-4"
                    style={{ color: content.headingColor || '#ffffff' }}
                >
                    {content.heading || 'Video Title'}
                </h1>
                <div className="aspect-video bg-gray-800 rounded mb-6 flex items-center justify-center overflow-hidden">
                    {content.videoUrl ? (
                        <video
                            src={content.videoUrl}
                            controls
                            className="w-full h-full rounded"
                        />
                    ) : (
                        <p style={{ color: content.textColor || '#d1d5db' }}>
                            Video placeholder
                        </p>
                    )}
                </div>
                <p
                    className="text-lg"
                    style={{ color: content.textColor || '#d1d5db' }}
                >
                    {content.description || ''}
                </p>
            </div>
        </div>
    );
}
