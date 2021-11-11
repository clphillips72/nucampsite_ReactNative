import React from 'react';
import { FlatList } from 'react-native';            //FlatList functions like <ol>
import { ListItem } from 'react-native-elements';   //ListItem functions like <li>

function Directory(props) {

    const renderDirectoryItem = ({item}) => {       //{item} is a property of an object that's auto passed in by 
        return (                                    //the Flatlist component.
            <ListItem
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('./images/react-lake.jpg')}}  //{{}} required b/c this property
            />                                                              // requires an object.  First {} is to embed JS inside JSX, and 2nd is to define the object literal
        );
    };

    return (
        <FlatList                                   // For the FlatList component, every item in
            data={props.campsites}                  // <== that data prop, 
            renderItem={renderDirectoryItem}        // <== that is executed and the object containing {item} is passed
            keyExtractor={item => item.id.toString()}
        />
    );
}

export default Directory;