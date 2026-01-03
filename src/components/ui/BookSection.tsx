import React from 'react';

interface BookSectionProps {
    title: string;
    icon?: string;
    viewAllLink?: string;
    children: React.ReactNode;
    headerAction?: React.ReactNode;
}

const BookSection: React.FC<BookSectionProps> = ({
    title,
    icon,
    viewAllLink,
    children,
    headerAction
}) => {
    return (
        <section>
            <div className="flex items-center justify-between mb-6 border-b border-border-dark pb-2">
                <h2 className="text-2xl font-bold flex items-center gap-2 text-text-main">
                    {icon && <span className="material-symbols-outlined text-primary">{icon}</span>}
                    {title}
                </h2>
                {viewAllLink ? (
                    <a className="text-sm text-text-muted hover:text-primary flex items-center gap-1 transition-colors" href={viewAllLink}>
                        Xem tất cả <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </a>
                ) : headerAction}
            </div>
            {children}
        </section>
    );
};

export default BookSection;
