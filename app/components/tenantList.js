import React, {Component} from 'react';
import { FlatList, Dimensions, SafeAreaView, Text, View ,StatusBar,TouchableOpacity,Image,StyleSheet,TextInput,Platform,NetInfo,RefreshControl,ScrollView} from 'react-native'
import {images} from '../../component/ImageUri'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { Colors ,fontSize,fontFamily} from 'component/appFontcolor';
const { width, height } = Dimensions.get('window');
import {ErrorToast,WarningToast,SuccessToast} from 'component/Toast/Toast'
import I18n from 'react-native-i18n'
import en from 'component/language/en.json'
import ch from 'component/language/ch.json'
import URLS from 'api/urls';
import Services from 'api/Service';
import Loader from 'component/loader';
import AlertMessage from 'component/AlertMessage'
import User from 'component/store/user'


export default class Tenant extends Component {
    constructor(props) {
        super(props);
        this.state= {
            locale: 'en',
            image:"http://diazworld.com/images/avatar-placeholder.png",
            tenant:[],
            tenantDataSearch:[],
            isLoading:false,
            isMsgloading: false,
            isFetching: false
        } 
        this.arrayholder = [];
    }

    tenantList =(loading)=>{
        NetInfo.isConnected.fetch().then(isConnected => {
            if (isConnected) {
                    this.setState({isLoading:loading},()=>{
                        Services.Get(URLS.getTenant)
                        .then(response => {   
                            this.setState({isLoading:false})
                            console.log(response.data.data)
                                let status = response.data.status;
                                if (status == false) {
                                    this.setState({ isLoading:false,isFetching: false},()=>{ErrorToast.showToast(response.data.message+"",true)})
                                } else {
                                    this.setState({ isLoading:false,isFetching: false},()=>{this.setState({tenant:response.data.data,tenantDataSearch:response.data.data})})
                                    this.forceUpdate();

                                }
                        }).catch(error => {  
                            this.setState({isLoading:false,isFetching: false})
                            ErrorToast.showToast(error+"");                       
                        });  
                    })
            } else {
                this.setState({ isLoading:false},()=>{ this.setState({isMsgloading:true, message: 'Please check your network connection and try again!!!'}) })
            }  
        }); 
        
    }

    onRefresh() {
        this.setState({ isFetching: true }, function() { this.tenantList(false) });
     }
     
    componentDidMount(){        
        this.tenantList(true)
    }

    onSelect = () => {
        this.tenantList(false);
    };

    componentWillReceiveProps (navigationProp){
        if(navigationProp.navigation.state.params.go_back == true){
            this.tenantList(false);
        }
    }

    idSet (id,value){
        if(parseInt(id) == 1){
            return "REN-"+ value;
        }else if (parseInt(id) == 2){
            return "NRIC-"+ value; 
        }else{
            return "Driving License-"+ value; 
        }
    }

    searchTextChanged = (event) => {
      
        if (event.length > 0) {
            this.state.isSearching = true;
            var searchText = event;
            searchText = searchText.trim().toLowerCase();
            this.state.tenant = this.state.tenant.filter(l => {
                if (l.name.toLowerCase().match(searchText)) {
                    return l.name.toLowerCase().match(searchText);
                }else if (l.phone_number.toLowerCase().match(searchText)) {
                    return l.phone_number.toLowerCase().match(searchText);
                } else {
                    return l.id_value.toLowerCase().match(searchText);
                }
            });
        } else {
            this.state.isSearching = false;
            this.state.tenant = this.state.tenantDataSearch;
        }
        this.setState({
            search_tenant: event
        })
    }

    
    render() {   
        const {locale} = this.state;
        return(
            <SafeAreaView style={{flex:1}}>
            <View style={{flex: 1,height:height,width:width}}>
                <StatusBar  translucent={false} backgroundColor="#ffffff" barStyle="dark-content"/>
                <View style={styles.dashboard_header_top}>
                    <TouchableOpacity activeOpacity={0.5} hitSlop={styles.hitslop}  onPress={()=>this.props.navigation.goBack()} >
                        <MaterialIcons name="arrow-back" size={25} color={'rgba(0,0,0,0.7)'} />
                    </TouchableOpacity> 
                    <View style={styles.Header_text_veiw}>
                        <Text style={{color:'black',fontFamily:fontFamily.RobotoMedium,fontSize:fontSize.f_18,textAlign:'center'}}>Tenant</Text>
                    </View>   
                </View>

                <View style={{backgroundColor:Colors.white_color,borderTopColor:Colors.light_grey_color,borderTopWidth:0.7,flexDirection:'row'}}>
                    <Image style={{marginHorizontal:10,alignSelf:'center'}} source={images.tenant_search}></Image>   
                    <TextInput 
                        style={(Platform.OS == 'ios') ? styles.settingedit_inputtext_ios : styles.settingedit_inputtext}
                        underlineColorAndroid={Colors.white_color}
                        selectionColor={'#000'}
                        placeholder= "Search tenant"
                        placeholderTextColor={'rgba(0,0,0,0.5)'}                         
                        returnKeyType='done'
                        keyboardType="default"
                        value={this.state.search_tenant}
                        onChangeText={(evt) => this.searchTextChanged(evt) }
                    />
                </View>
               <View style={{flex:1}}> 
               <View style={{flex:1,backgroundColor: 'white',elevation: Platform.OS == 'ios' ? 0 : 5,shadowColor: Platform.OS == 'ios' ? "transparent" : "#000000",shadowOpacity: 0.3,shadowOffset: {height: Platform.OS == 'ios' ? 0 : -10,width: 0}}}>
                    {
                        Platform.OS == 'ios'
                        ?
                        <View style={{height:5,backgroundColor:'white',elevation:2.5,shadowColor: "#000000",shadowOpacity: 0.1,shadowOffset: {height: 4,width: 0}}}>
                        </View>
                        :
                        null
                    }
                    <View style={{flex:1}}>
                        {this.state.tenant.length > 0 && this.state.isLoading != true ? <View>
                            <FlatList
                                data={this.state.tenant}
                                scrollEnabled
                                onRefresh={() => this.onRefresh()}
                                refreshing={this.state.isFetching}
                                showsHorizontalScrollIndicator={false}
                                extraData={this.state}
                                style={{height:height - 110,}}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => {
                                    return(   
                                        <View>   
                                            <TouchableOpacity style = {{flexDirection:'row',justifyContent:'space-between'}} onPress={()=>this.props.navigation.navigate("ViewTenant",{name:item.name,image:item.tenant_profile != '' &&  item.tenant_profile != null?  item.tenant_profile:this.state.image,id:item.id})}>
                                                <View  style={{flexDirection:'row',paddingLeft:10,paddingBottom:5,paddingTop:10}}>
                                                    <Image style={styles.Agent_round_img} source={{uri:   item.tenant_profile != '' &&  item.tenant_profile != null?  item.tenant_profile:this.state.image}}></Image>
                                                    <View style={{flexDirection:'column', paddingLeft:15}}>
                                                        <Text style={[styles.Agent_name,{width:width*0.68}]} >{item.name}</Text>
                                                        <Text style={styles.nric} >{this.idSet(item.idtype_id,item.id_value)}</Text>
                                                        <View style={{flexDirection:'row',alignSelf:'flex-start'}}>
                                                            {/* <Image style={{marginTop:-10,marginLeft:-10}} source={images.tenant_small_call}></Image> */}
                                                            <Text style={styles.phone} >{item.phone_number}</Text>
                                                            {/* <Text style={styles.phone} >{item.alt_phone_number.length > 5? ", "+item.alt_phone_number:null}</Text> */}
                                                        </View>
                                                    </View>
                                                </View>
                                                <Image style={{alignSelf:'center'}} source={images.tenant_arrow}></Image>
                                            </TouchableOpacity>
                                        
                                            <View style={{borderBottomColor:Colors.light_grey_color,borderBottomWidth:0.8}}></View>
                                        </View>      
                                )}}>

                            </FlatList>
                        </View>   
                    : this.state.isLoading == false &&
                        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                            <Text style={{textAlign:"center"}}>No tenant available!</Text>
                        </View>
                    }
                   
                    
                    {/* <View style={{borderBottomColor:Colors.light_grey_color,borderBottomWidth:0.8}}></View> */}
                    <TouchableOpacity activeOpacity={0.6} style={{position:'absolute',bottom:10,right:10}}  onPress={()=>{this.props.navigation.navigate("AddTenant",{text:"Create New",onSelect: this.onSelect })}}>
                        <Image source={images.add}></Image>
                    </TouchableOpacity>
                    
                </View>
                </View>
                   
                        
                </View>
                {
                    this.state.isLoading ? <Loader isLoading ={this.state.isLoading}/> : null
                }
                {
                    this.state.isMsgloading ? <AlertMessage isMsgloading ={this.state.isMsgloading} title = {I18n.t('Message',{locale: locale})} message = {this.state.message} actiontext = {I18n.t('OK',{locale: locale})} action= {()=>this.setState({isMsgloading:false})} locale = {locale}/> : null
                }
            </View>
            </SafeAreaView>
        )
    };

}

const styles =  StyleSheet.create({
    hitslop:{
        top: 20,
        bottom: 20,
        left: 50,
        right: 30
    },
    dashboard_header_top:{
        flexDirection:'row',
        // borderBottomColor:Colors.light_grey_color,
        // borderBottomWidth:1,
        paddingLeft: 12,
        padding: 9,
        height:50,
        alignItems: 'center'
    },
    Header_text_veiw:{
        flexDirection:'row',
        justifyContent:'center',
        width:width-80,
        alignItems:'center',
        alignContent:'center',
        alignSelf:'center'
    },  
    settingedit_inputtext_ios:{
        paddingTop: 10,        
        fontFamily: fontFamily.RobotoRegular,
        color: '#000',  
        marginLeft:-5,
        fontSize: 16,
        width:width - 60,        
    },
    settingedit_inputtext:{
        marginTop: -3,
        marginLeft:-5,
        marginBottom: -3,
        fontFamily: fontFamily.RobotoRegular,
        color: '#000',
        fontSize: 16,
        width:width - 60,
    },
    Agent_round_img:{
        height:50,
        width:50,
        borderRadius:25,
        marginLeft:10,
    },
    Agent_name:{
        color:Colors.black_color,
        fontSize:fontSize.f_15,
        marginBottom:3,
        fontFamily:fontFamily.RobotoMedium,
       
    },
    nric:{
        color:'rgba(0,0,0,0.8)',
        fontSize:fontSize.f_13,
        fontFamily:fontFamily.RobotoRegular,
        marginBottom:3
    },
    phone:{
        color:'rgba(0,0,0,0.7)',
        fontSize:fontSize.f_12,
        marginBottom:3,
        fontFamily:fontFamily.RobotoRegular,
    },
});