import { Button } from "@/components/button";
import { colorPalette } from "@/constants/color";
import { an, anv } from "@/constants/PixelScaling";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image as Img, Platform, Pressable } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function Onboarding() {
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={style.container}>
      <StatusBar style="light" />
      <LinearGradient style={style.bg} colors={["#235697", "#114280"]} />
      <View className="size-full">
        <Image
          style={style.image}
          source={require("../../assets/images/app-logo.png")}
          placeholder={{ blurhash }}
          contentFit="contain"
          transition={1000}
        />
        {/* <View className="flex w-full bg-purple-100">
          <Image
            style={style.mockup}
            source={require("../../assets/images/mockup/mockup-one.png")}
            contentFit="contain"
            transition={1000}
          />
          <Text>Swift Pay Bank</Text>
        </View> */}
        {/* <View className="mx-[37px] border h-fit"> */}
        <Img
          style={style.mockup}
          source={require("../../assets/images/mockup/mockup-two.png")}
        />
        {/* </View> */}
        <View
          className="absolute bottom-0 bg-white"
          style={style.bottomContainer}
        >
          <View>
            <Text style={style.header}>Mobile banking the world loves.</Text>
            <Text style={style.headerbody}>
              Get sending, spending and saving with your contactless card.
            </Text>
          </View>
          <View className="w-full gap-x-3 flex flex-row">
            <Button loading={false} variant="outline">
              Login
            </Button>
            <Button btnStyle={{ width: "60%" }} loading={false}>
              Get Started
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    inset: 0,
    position: "absolute",
  },
  image: {
    width: an(170),
    height: anv(27),
    marginTop: anv(32),
    marginLeft: "auto",
    marginRight: "auto",
  },
  mockup: {
    resizeMode: "contain",
    width: "100%",
    alignContent: "flex-start",
    height: anv(602),
    paddingLeft: an(37.5),
    paddingRight: an(37.5),
    marginTop: anv(32),
  },
  bottomContainer: {
    width: "100%",
    height: anv(331),
    borderTopLeftRadius: anv(16),
    borderTopRightRadius: anv(16),
    paddingLeft: an(20),
    paddingRight: an(20),
    paddingBottom: Platform.OS === "ios" ? anv(54) : anv(20),
    paddingTop: anv(32),
    justifyContent: "space-between",
  },
  header: {
    fontFamily: "Inter-Bold",
    fontSize: an(28),
    textAlign: "center",
    letterSpacing: -(an(28) * 0.02),
    lineHeight: an(28) * 1.2,
  },
  headerbody: {
    fontFamily: "Inter-Regular",
    fontSize: an(15),
    textAlign: "center",
    color: colorPalette["gray-100"],
    marginTop: anv(12),
    letterSpacing: -(an(15) * 0.02),
    lineHeight: an(15) * 1.5,
  },
});
