import React, { useEffect, useState } from 'react';
import { FlatList, Image, Pressable, SafeAreaView , Text, View  } from 'react-native';
import { style } from './style';
import { globalStyle } from '../../Assets/Style/globalStyle';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Header } from '../../Components/Header/Header';
import { ScrollView } from 'react-native-gesture-handler';
import { Search } from '../../Components/Search/Search';
import { Tab } from '../../Components/Tab/Tab';
import { updateSelectedCategoriesId } from '../../Redux/Reducers/categories';
import SingleDonation from '../../Components/singleDonation/singleDonation';
import { updateSelectedDonationItemId } from '../../Redux/Reducers/Donation';
import { Routes } from '../../Navigation/Routes/routes';
import { setToInitialState } from '../../Redux/Reducers/Donation';
import { logOut } from '../../api/user';
import Name from '../../Components/Name/Name';

const Home = ({navigation}) => {

    const user = useSelector(state => state.user);
    const categories = useSelector(state => state.categories);
    const donation = useSelector( state => state.donation);
    const dispatch = useDispatch();
    // console.log(user);
    // dispatch(setToInitialState());

    const [donationItem , setDonationItem] = useState([]);

    useEffect(() => {
    const items = donation.items.filter((value) => value.categoryIds.includes(categories.selectedCategoriesId));
    setDonationItem(items);
    }
    , [categories.selectedCategoriesId, donation.items]);
        // console.log(donationItem);


    return (
        <SafeAreaView style={[globalStyle.backgroundWhite , globalStyle.flex]}>
            <ScrollView>
            <View style={style.headerContainer}>
                <View>
                    <Text style={style.hello}>Hello,</Text>
                    <View style={style.userName}>
                        <Header title={user.displayName + ' 👋' } />
                    </View>
                </View>
                <View>
                    <Image style={style.image} source={{uri : 'https://th.bing.com/th/id/OIP.hXKkrWM84AxWrKuEv3yiCwHaHa?w=201&h=200&c=7&r=0&o=5&dpr=1.1&pid=1.7'}} />
                    <Pressable onPress={async () => {
                        dispatch(setToInitialState());
                        await logOut();
                    }}>
                        <Header type={3} title={'Logout'} color = {'blue'} />
                    </Pressable>
                </View>
            </View>
            <View style={style.search}>
                <Search Go = {(value) => console.log(value)} />
            </View>
            <View style={style.posterContainer}>
                <Image style={style.poster} source={require('../../Assets/images/highlighted_image.png')} />
            </View>
            <View style={style.catTextContainer}>
                <Header title={'Select Category'} type={2} />
            </View>
            <FlatList horizontal={true}
                data={categories.categories} renderItem={({item})=>{return (
                <View style={style.catContainer} key={item.categoryId}>
                <Tab text={item.name}
                tabId = {item.categoryId}
                onPress={(value)=>dispatch(updateSelectedCategoriesId(value))}
                isInactive = {item.categoryId !== categories.selectedCategoriesId}
                />
                </View>
            );}} />
            {donationItem.length > 0 && (<View style={style.donationItemContainer}>
                {donationItem.map((value) => <SingleDonation
                onPress = {() => {dispatch(updateSelectedDonationItemId(value.donationItemId));
                navigation.navigate(Routes.SingleDonationItem);
                // console.log('selectedDonationItemId :',value.donationItemId);
                // console.log('donation:', donation);
                // console.log('categoryIds:', value.categoryIds);

            }}
                key = {value.donationItemId}
                price = {parseFloat(value.price) + ' $'}
                donationTitle = {value.name}
                image = {value.image}
                textColor = {'blue'}
                badgeTitle={categories.categories.find((val) => value.categoryIds.includes(val.categoryId))?.name || 'Unkown'}
                />)
                }
            </View>)}
            <Name />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
