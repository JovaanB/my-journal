import * as React from "react";
import CustomCard from "../Components/Card";
import SearchBar from "../Components/SearchBar";
import elements from "../CustomProperties/elements";
import { ScrollView } from "react-native";
import FAB from "../Components/FAB";
import ActionsMenu from "../Components/ActionsMenu";
import CustomFAB from "../Components/FAB";

const MusicRoute = () => {
  return (
    <React.Fragment>
      <SearchBar />
      {/* <ScrollView>
        {elements.map((ele) => (
          <CustomCard
            key={ele.id}
            title={ele.title}
            content={ele.content}
            uri={ele.uri}
            comment={ele.comment}
            shares={ele.shares}
            views={ele.views}
            likes={ele.likes}
          />
        ))}
      </ScrollView> */}
      <CustomFAB />
    </React.Fragment>
  );
};

export default MusicRoute;
