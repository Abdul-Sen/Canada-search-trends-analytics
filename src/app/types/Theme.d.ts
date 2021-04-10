type Theme = "Dark" | "Light";

interface ITheme {
    AppTheme: Theme
}

type ThemeContextType = {
    theme: ITheme,
    updateTheme: (newTheme: ITheme) => void;
};