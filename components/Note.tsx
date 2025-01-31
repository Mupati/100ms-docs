import React from 'react';

interface Props {
    type?: 'warning' | 'success' | 'error' | 'white';
    title?: string;
}

// Warning: yellow
// Success: green
// Error: red
// White: white

const Note: React.FC<Props> = ({ type = 'white', title = '', children }) => {
    const resolveColor = () => `var(--${type})`;
    return (
        <div className="note">
            {title ? (
                <span
                    style={{
                        fontWeight: '500',
                        fontSize: '13px',
                        paddingBottom: '4px',
                        lineHeight: '24px',
                        color: resolveColor()
                    }}>
                    {title}
                </span>
            ) : null}
            {children}
            <style jsx>{`
                div {
                    padding-left: 20px;
                    background: var(--docs_bg_card);
                    margin: 24px 0;
                    border-left: 4px solid ${resolveColor()};
                }
            `}</style>
        </div>
    );
};

export default Note;
