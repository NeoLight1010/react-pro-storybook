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
     * Font color.
     */
    fontColor?: string;
    /**
     * Background color of the label.
     */
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, backgroundColor, fontColor, }: MyLabelProps) => JSX.Element;
