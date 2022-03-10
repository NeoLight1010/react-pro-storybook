import "./MyLabel.css";

export interface MyLabelProps {
    /**
     * Label value.
     */
    label?: string;

    /**
     * Size of the label.
     */
    size?: "normal" | "h1" | "h2" | "h3";

    /**
     * Render label in all caps?
     */
    allCaps?: boolean;

    /**
     * Color of the label.
     */
    color?: "primary" | "secondary" | "tertiary";

    /**
     * Background color of the label.
     */
    backgroundColor?: string;
}

export const MyLabel = ({
    label = "No label",
    size = "normal",
    color = "primary",
    allCaps = false,
    backgroundColor,
}: MyLabelProps): JSX.Element => {
    return (
        <span
            className={`label ${size} text-${color}`}
            style={{
                backgroundColor,
            }}
        >
            {allCaps ? label.toUpperCase() : label}
        </span>
    );
};
