import React, { Component } from "react";
import { Dimensions, FlatList, Image, StatusBar, StyleSheet, View } from "react-native";
import { GColors, hp, images, wp } from "../../common";
import { GButton, GSubTitle, GTitle } from "../../common/GComponents";
import { getScreenTranslate } from "../../localize/Localize";
import { Tutorial } from "../../localize/screen-names";

const TutorialT = getScreenTranslate(Tutorial);
const { width } = Dimensions.get("screen");

export default class TutorialScreen extends Component {
  constructor() {
    super();
    this.state = {
      tutorialArr: [
        {
          id: 0,
          title: TutorialT.screen1Title,
          subTitle: TutorialT.screen1SubTitle,
          img: images.TutorialScreen1,
        },
        {
          id: 1,
          title: TutorialT.screen2Title,
          subTitle: TutorialT.screen2SubTitle,
          img: images.TutorialScreen2,
        },
        {
          id: 2,
          title: TutorialT.screen3Title,
          subTitle: TutorialT.screen3SubTitle,
          img: images.TutorialScreen3,
        },
      ],
      currentIndex: 0,
    };
  }
  renderTutorial = ({ item, index }) => {
    const { currentIndex } = this.state;
    const arrLength = this.state.tutorialArr.length - 1;
    return (
      <View style={styles.flatlistView}>
        {/* img view */}
        <View style={styles.imgView}>
          <View style={styles.imgSubView}>
            <Image source={item.img} style={styles.img} />
          </View>

          {/* title View */}
          <View style={styles.titleView}>
            <GTitle headerText={item.title} textStyle={{ textAlign: "center" }} />
            <GSubTitle textStyle={{ textAlign: "center" }} headerText={item.subTitle} />
          </View>
        </View>
        {/* btn View */}
        <View style={{ flex: 1, justifyContent: "flex-end", paddingBottom: hp(5) }}>
          <View style={styles.btnView}>
            <View style={{ flex: 4, flexDirection: "row" }}>
              {this.state.tutorialArr.map((_, index1) => {
                return (
                  <View
                    key={"" + index1}
                    style={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: currentIndex == index1 ? GColors.themColor : GColors.grey,
                      aspectRatio: currentIndex == index1 ? 3 : 1,
                      marginHorizontal: 4,
                    }}
                  />
                );
              })}
            </View>
            <View style={{ flex: 1 }}>
              <GButton
                btnStyle={{ width: wp(20) }}
                text={arrLength == currentIndex ? "Go" : "Next"}
                onPress={() => {
                  if (currentIndex != arrLength) {
                    this.flatListRef.scrollToIndex({
                      index: currentIndex + 1,
                    });
                  } else {
                    this.props.navigation.navigate("StartScreen");
                  }
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };

  flatListOnScroll = ({ nativeEvent }) => {
    const { currentIndex } = this.state;
    let currentScrollIndex = Math.round(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if (currentIndex != currentScrollIndex) {
      this.setState({
        currentIndex: currentScrollIndex,
      });
    }
    return null;
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <StatusBar backgroundColor={GColors.white} barStyle={"dark-content"} />
        <FlatList
          data={this.state.tutorialArr}
          keyExtractor={(_, index) => index.toString()}
          horizontal={true}
          // scrollEnabled={false}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onScroll={this.flatListOnScroll}
          ref={(ref) => {
            this.flatListRef = ref;
          }}
          renderItem={this.renderTutorial}
          bounces={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: GColors.white,
  },
  flatlistView: {
    width: width,
  },
  imgView: {
    alignItems: "center",
    justifyContent: "center",

    flex: 9,
  },
  imgSubView: {
    height: hp(40),
    aspectRatio: 1,
    // marginTop: hp(10),
  },
  img: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  titleView: {
    marginHorizontal: wp(8),
    marginTop: hp(3),
  },

  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: wp(8),
  },
});
