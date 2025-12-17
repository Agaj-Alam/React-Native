import { FlatList, StyleSheet, View,Text, Image } from "react-native"

const FlatListConcept=()=>{
  const data=[
    {id:'1',title:'demo product 1', price:123,imageUrl:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-572949-1640777.jpg&fm=jpg'},
    {id:'2',title:'demo product 2', price:134,imageUrl:'https://thumbs.dreamstime.com/b/diet-healthy-food-lifestyle-health-concept-sport-exercise-equipment-workout-and-gym-background-nutrition-detox-salad-f-179855057.jpg'},
    {id:'3',title:'demo product 3', price:140,imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQngrxUh-xvZjTxQr_j_MsyId9dxEZtaZPZvA&s'},
    {id:'4',title:'demo product 4', price:500,imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHlA21NiySUv0nKeiQ1zidk1S9EhHABTyRYg&s'}
  ]

  return(
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={({item})=>(
          <View style={styles.productWrapper}>
            <Image source={{uri:item.imageUrl}}  style={styles.pImage}/>
          </View>
        )}
        keyExtractor={item=>item.id}
      />
    </View>
  )
}
const styles=StyleSheet.create({
  wrapper:{
    flex:1,
    padding:10,
    backgroundColor:'white'
  },
  productWrapper:{
    width:300,
    height:200,
    backgroundColor:'grey',
    marginRight:10,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginTop:10,
    overflow:'hidden'
  },
  pImage:{
    width:300,
    height:200,
    resizeMode:'contain',
  }
})
export default FlatListConcept;