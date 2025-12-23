import "./global.css";
import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  ImageBackground,
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";
import speech from "./assets/speech.webp";
import { useState } from "react";
import { Greet } from "./components/Greet";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View className="flex-1 bg-green-400">
      <Text className="mt-6  text-xl text-center py-4 bg-white">
        Welcome Emmy!
      </Text>
      <Greet name="Ola" />
      <View className="flex-row items-center justify-center py-2">
        <Image source={speech} className="w-52 h-52 rounded-md mx-auto mt-4" />
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1761839256547-0a1cd11b6dfb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
          }}
          className="w-52 h-52 rounded-md mx-auto mt-4"
        />
      </View>
      <Button
        title="Press me"
        color="#87039c"
        onPress={() => setIsModalVisible(!isModalVisible)}
      />
      <Button
        title="Alert"
        onPress={() =>
          Alert.alert("Invalid Date", "Incorrect DOB", [
            { text: "Cancel", onPress: () => console.log("Cancel") },
            { text: "Ok", onPress: () => console.log("Ok") },
          ])
        }
      />
      <Pressable
        className="bg-red-200"
        onPress={() => Alert.alert("Button pressed")}
      >
        <Text className="text-white px-4 py-2 rounded-md font-bold text-center">
          Press me
        </Text>
      </Pressable>

      {/* <ImageBackground source={speech} className="flex-1"></ImageBackground>
       */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setIsModalVisible(true);
        }}
      >
        <View className="flex-1 bg-blue-400 relative p-4">
          {/* Close button */}
          <Pressable
            onPress={() => setIsModalVisible(!isModalVisible)}
            className="absolute right-4 top-2"
          >
            <View className="bg-white p-1 w-8 h-8 rounded-full flex items-center justify-center">
              <Text className="text-black font-bold">X</Text>
            </View>
          </Pressable>

          {/* Content */}
          <Text className="text-white mt-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            aut in sint voluptatem, nulla reiciendis maxime ipsum inventore nam
            blanditiis.
          </Text>
        </View>
      </Modal>

      <ScrollView className="p-4 bg-black">
        <Text className="text-white leading-relaxed text-lg pb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          quae ullam pariatur rem totam unde possimus ipsam quasi a architecto
          eos dolor eveniet nesciunt excepturi, tempora blanditiis quidem
          quisquam odio aperiam ratione consequatur, officia aliquam praesentium
          molestias. Perferendis asperiores fugit maxime nam corrupti?
          Consequuntur culpa aperiam illo delectus recusandae pariatur officiis
          voluptate natus libero magni asperiores sint et vitae, voluptates,
          minima mollitia, quis nobis? Ut temporibus officiis beatae vel omnis
          officia necessitatibus ab cumque. Rem neque aliquam quia dicta labore
          vitae nemo, perspiciatis iure consectetur! Nostrum, delectus tempora
          laborum odit architecto quo repellat ipsum quisquam a obcaecati
          commodi aliquid eaque expedita ad. Sequi dolor voluptates nemo
          accusamus exercitationem, aperiam enim? Pariatur inventore voluptatum
          amet in dolor. Doloribus commodi unde eius aliquam nemo cum sit quidem
          sed esse sint nesciunt vitae nostrum dolore impedit quod, quia iusto
          similique dicta possimus quos totam? Quam similique tempora molestias
          ad, iste consectetur cupiditate inventore nostrum aliquam non
          obcaecati nobis incidunt pariatur? Similique maiores a autem enim
          ipsam officiis perferendis laborum consectetur voluptas doloremque
          veniam minima atque, suscipit delectus aut obcaecati beatae aliquid
          voluptate ipsa itaque, adipisci quas odio! Nisi, veritatis facilis
          molestias perferendis iure ut amet itaque quis autem sapiente modi
          suscipit dicta sunt officia id esse odio. Accusamus quaerat, tempore
          nam nesciunt dolorem corporis corrupti cupiditate sequi. Porro,
          possimus cum ad nemo magni obcaecati distinctio facilis repellat rerum
          earum doloribus alias magnam veniam quas ratione perferendis quod?
          Quia, accusamus. Ab dicta dolorum vero ullam aspernatur, porro magnam
          perspiciatis nobis, nihil ut voluptas expedita rem voluptatum facilis
          dolore! In a commodi voluptates ducimus harum illum cupiditate
          dignissimos ab dolor perferendis qui eligendi aperiam dicta, tenetur
          facilis magni? Labore commodi qui quidem quia. Eligendi nesciunt
          pariatur rem dignissimos, eius similique autem inventore, minus,
          maiores excepturi esse sapiente iure! Dolorem porro, cupiditate
          deleniti voluptatibus libero quis vitae corporis facilis ad. Ea
          asperiores, libero optio ipsam, reprehenderit ab quas sint quisquam
          aspernatur adipisci reiciendis corrupti tempore labore? Hic, illo ipsa
          ullam similique placeat quaerat tenetur possimus ipsum, repudiandae
          vel obcaecati, corrupti ut quo at esse labore? Commodi debitis placeat
          rerum officiis ullam error! Fugiat beatae numquam maxime vitae
          perferendis molestias amet consectetur quaerat tenetur eaque, iste
          aliquid, quisquam error labore necessitatibus, obcaecati voluptatem
          est quibusdam nisi reiciendis totam in sed deserunt enim! Assumenda,
          doloremque consequatur? Nam, deleniti deserunt minima, recusandae
          consectetur rerum inventore delectus ad debitis cumque natus
          praesentium dolore sit doloribus adipisci quasi sapiente nesciunt
          mollitia! Corrupti et quod vero dolor magnam nemo ex veniam deleniti
          quos enim facere, architecto tempora vel velit accusantium. In
          distinctio possimus soluta odio blanditiis accusamus reiciendis
          nesciunt dolorem a repellat perspiciatis, doloremque officiis earum
          repellendus beatae ex quod tempora, cum quam unde tenetur cupiditate
          harum sequi alias! Expedita beatae, nisi ducimus quidem reiciendis
          fugit aliquam provident nihil sunt, earum deleniti harum quasi a
          laudantium labore laborum eveniet? Delectus numquam, voluptate sunt
          quaerat eius sequi. Aliquid maiores consequatur pariatur vel. Quaerat
          eius sapiente porro eum ipsam! Exercitationem odit quibusdam
          consectetur. Molestias aliquid eligendi culpa libero praesentium, ut
          perspiciatis iure voluptate suscipit?
        </Text>
      </ScrollView>
      <StatusBar barStyle="light-content" backgroundColor="red" />
    </View>
  );
}
