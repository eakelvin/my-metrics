import { Link, useRouter } from "expo-router";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import Frame from '../assets/frame37154.png'
import tw from 'twrnc'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const onboarding1 = () => {
    const router = useRouter()

    return (
        <View style={tw`mt-20`}>
            <View style={tw`flex justify-center items-center`}>
                <Image style={tw``} source={Frame} />
            </View>
            <View style={tw`p-5`}>
                <Text style={tw`font-bold text-2xl pb-2`}>Fast Check</Text>
                <Text style={tw`text-lg`}>Keep track of your medical reports
                    seamlessly at the comfort of your home 
                    and share with a Professional.
                </Text>
               
                <View style={tw`flex-row justify-center py-5`}>
                    <View style={tw`flex w-3 h-3 mx-2 bg-gray-200 rounded-full`}></View>
                    <View style={tw`flex w-3 h-3 bg-green-500 rounded-full`}></View>
                    <View style={tw`flex w-3 h-3 mx-2 bg-gray-200 rounded-full`}></View>
                </View>

                <View style={tw`pt-5 flex-row`}>
                    <Link href='/onboarding1'>
                        <Ionicons name="arrow-back" size={26} color="black" />
                        <Text style={tw `font-bold text-2xl`}>Back</Text>
                    </Link>
                </View>

                <View style={tw`pt-3`}>
                    <TouchableOpacity onPress={() => router.push('/onboarding3')}>
                        <View style={tw`items-center justify-center rounded-none focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}>
                        <Text style={tw`text-white text-[15px] text-center`}>
                        <Text style={tw`text-white text-[15px] text-center flex-row`}>
                            <Text style={tw`mr-5`}>NEXT</Text>
                            <FontAwesome name="long-arrow-right" size={20} color="white" />
                        </Text>
                        </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => router.push('/login')}>
                        <View style={tw`mt-2 text-green-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:text-green dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700`}>
                        <Text style={tw`text-green text-[15px] text-center`}>
                            SKIP
                        </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )

}

export default onboarding1