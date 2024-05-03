export interface IButton {
    /**
     * If the button is active or not
     */
    isActive: boolean;
    /**
     * Additional class names to be added to the button
     */
    className?: string;
    /**
     * The function to be called when the button is clicked
     */
    onClick?: () => void;
    /**
     * The children of the button
     */
    children?: React.ReactNode;
}
