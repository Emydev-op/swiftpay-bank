import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import React from "react";
import { an, anv } from "@/constants/PixelScaling";

type buttonProp = {
  children: React.ReactNode;
  props?: React.ForwardRefExoticComponent<
    PressableProps & React.RefAttributes<View>
  >;
  btnStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  loading?: boolean;
  disabled?: boolean;
  variant?: "outline" | "default";
};

export const Button = ({
  children,
  props,
  btnStyle,
  textStyle,
  loading,
  disabled,
  variant = "default",
}: buttonProp) => {
  return (
    <Pressable
      style={[
        variant === "default" ? styles.defaultbutton : styles.outlinebutton,
        disabled && styles.disabledbtn,
        btnStyle,
      ]}
      disabled={disabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "default" ? "#d9d9d9" : "#88A9C9"}
        />
      ) : (
        <Text
          style={[
            variant === "default" ? styles.defaulttext : styles.outlinetext,
            textStyle,
          ]}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  defaultbutton: {
    backgroundColor: "#114280",
    paddingTop: anv(16),
    paddingBottom: anv(16),
    borderRadius: 8,
  },
  outlinebutton: {
    borderColor: "#114280",
    borderWidth: 1,
    paddingTop: anv(16),
    paddingBottom: anv(16),
    borderRadius: 8,
    flex: 1,
  },
  defaulttext: {
    color: "#FFF",
    textAlign: "center",
    fontSize: an(15),
    letterSpacing: -(an(15) * 0.02),
    lineHeight: an(15) * 1.4,
  },
  outlinetext: {
    color: "#114280",
    textAlign: "center",
    fontSize: an(15),
    letterSpacing: -(an(15) * 0.02),
    lineHeight: an(15) * 1.4,
  },
  disabledbtn: {
    backgroundColor: "#88A9C9",
  },
});
