import { useContext } from "react";
import { TouchableOpacity , Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";

interface ButtonProps {
    onPres: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}

export default function Button({title,onPres,isBlue,isGray}:ButtonProps) {
    const theme = useContext(ThemeContext);

    return (
        <TouchableOpacity
            style={
                isBlue
                ?Styles.btnOrange
                :isGray
                ?Styles.btnGray
                :theme === 'light'
                ?Styles.btnLight
                :Styles.btnDark
            }
            onPress={onPres}
        >
            <Text
                style={
                    isBlue || isGray
                    ?Styles.smallTextLight
                    :theme === 'dark'
                    ?Styles.smallTextLight
                    :Styles.smallTextDark
                }
            >
                {title}
            </Text>
        </TouchableOpacity>
    ); 
}