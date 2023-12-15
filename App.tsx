// ChatScreen.js

import React from 'react';
import { View, FlatList, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const chatData = [
  { id: '1', sender: 'You', message: 'Привіт, як справи?', userImage: 'https://cdn.discordapp.com/attachments/859133765505777725/1185170584162795590/image.png?ex=658ea31e&is=657c2e1e&hm=5d990813f49b24ed7899b2806eb152109cc26269be4c3e806b9d5cf03b157f17&' },
  { id: '2', sender: 'Alex', message: 'свиня_в_джакузі.gif', userImage: 'https://cdn.discordapp.com/attachments/859133765505777725/1185170636159598652/image.png?ex=658ea32b&is=657c2e2b&hm=90376c46ac5f5967502d6cbb319b814d19a6951166f76d5fe7c3f228b7c8adeb&' },
  { id: '3', sender: 'John', message: 'Привіт! Як ви сьогодні? 🌞', userImage: 'https://cdn.discordapp.com/attachments/859133765505777725/1185170732985090208/image.png?ex=658ea342&is=657c2e42&hm=8afe51443cc53765b946a6ae758917d1f0190b1d2d6d779a094165f889d198ea&' },
  { id: '4', sender: 'You', message: 'Все добре, дякую! А як у вас? Що нового?', userImage: 'https://cdn.discordapp.com/attachments/859133765505777725/1185170584162795590/image.png?ex=658ea31e&is=657c2e1e&hm=5d990813f49b24ed7899b2806eb152109cc26269be4c3e806b9d5cf03b157f17&' },
  { id: '5', sender: 'Alex', message: 'Недавно повернувся з подорожі. Фото краєвидів тут: travel_pics.zip', userImage: 'https://cdn.discordapp.com/attachments/859133765505777725/1185170636159598652/image.png?ex=658ea32b&is=657c2e2b&hm=90376c46ac5f5967502d6cbb319b814d19a6951166f76d5fe7c3f228b7c8adeb&' },
  { id: '6', sender: 'John', message: 'Вау, подорожі завжди цікаво! Зараз переглядаю ваші фото. Де саме ви були?', userImage: 'https://cdn.discordapp.com/attachments/859133765505777725/1185170732985090208/image.png?ex=658ea342&is=657c2e42&hm=8afe51443cc53765b946a6ae758917d1f0190b1d2d6d779a094165f889d198ea&' },
  { id: '7', sender: 'You', message: 'Були в Австралії. Спробував вперше сурфінг, це було неймовірно!', userImage: 'https://cdn.discordapp.com/attachments/859133765505777725/1185170584162795590/image.png?ex=658ea31e&is=657c2e1e&hm=5d990813f49b24ed7899b2806eb152109cc26269be4c3e806b9d5cf03b157f17&' },
  { id: '8', sender: 'Alex', message: 'Слухай, як ти взагалі наважився на сурфінг? Я б такого не витримав!', userImage: 'https://cdn.discordapp.com/attachments/859133765505777725/1185170636159598652/image.png?ex=658ea32b&is=657c2e2b&hm=90376c46ac5f5967502d6cbb319b814d19a6951166f76d5fe7c3f228b7c8adeb&' },
  { id: '9', sender: 'John', message: 'Це дійсно вражаюче! Як ти впорався з хвилями? 🏄‍️', userImage: 'https://cdn.discordapp.com/attachments/859133765505777725/1185170732985090208/image.png?ex=658ea342&is=657c2e42&hm=8afe51443cc53765b946a6ae758917d1f0190b1d2d6d779a094165f889d198ea&' },
  { id: '10', sender: 'You', message: 'Трошки літаючи на хвилях, але це дуже захопливо. Трошки і впав, але це частина веселощів!', userImage: 'https://cdn.discordapp.com/attachments/859133765505777725/1185170584162795590/image.png?ex=658ea31e&is=657c2e1e&hm=5d990813f49b24ed7899b2806eb152109cc26269be4c3e806b9d5cf03b157f17&' },
  { id: '11', sender: 'Alex', message: 'Маєш моє повагу! Я б злякався взагалі підійти до великої хвилі. Що ще цікавого робив на відпочинку?', userImage: 'https://cdn.discordapp.com/attachments/859133765505777725/1185170636159598652/image.png?ex=658ea32b&is=657c2e2b&hm=90376c46ac5f5967502d6cbb319b814d19a6951166f76d5fe7c3f228b7c8adeb&' },
  { id: '12', sender: 'John', message: 'Крім сурфінгу, що-небудь ще цікавого відбулося? Можливо, нові знайомства чи неймовірні смаколики?', userImage: 'https://cdn.discordapp.com/attachments/859133765505777725/1185170732985090208/image.png?ex=658ea342&is=657c2e42&hm=8afe51443cc53765b946a6ae758917d1f0190b1d2d6d779a094165f889d198ea&' },
  { id: '13', sender: 'You', message: 'Так, познайомився з цікавими людьми та спробував місцевий десерт "Ламінгтон". Обов\'язково спробуй, якщо колись потрапиш в Австралію!', userImage: 'https://cdn.discordapp.com/attachments/859133765505777725/1185170584162795590/image.png?ex=658ea31e&is=657c2e1e&hm=5d990813f49b24ed7899b2806eb152109cc26269be4c3e806b9d5cf03b157f17&' },
  { id: '14', sender: 'Alex', message: 'Ламінгтон, це щось схоже на пиріг чи кекс? Або це якесь місцеве чудо?', userImage: 'https://cdn.discordapp.com/attachments/859133765505777725/1185170636159598652/image.png?ex=658ea32b&is=657c2e2b&hm=90376c46ac5f5967502d6cbb319b814d19a6951166f76d5fe7c3f228b7c8adeb&' }
];

class ChatScreen extends React.Component {
  state = {
    messages: chatData,
    newMessage: '',
  };

  handleSend = () => {
    const { newMessage, messages } = this.state;
    const newId = (messages.length + 1).toString();
    const updatedMessages = [
      ...messages,
      { id: newId, sender: 'You', message: newMessage, userImage: 'https://cdn.discordapp.com/attachments/859133765505777725/1185170584162795590/image.png?ex=658ea31e&is=657c2e1e&hm=5d990813f49b24ed7899b2806eb152109cc26269be4c3e806b9d5cf03b157f17&' },
    ];
    this.setState({ messages: updatedMessages, newMessage: '' });
  };

  renderMessage = ({ item }) => {
    const isUser = item.sender === 'You';
    const messageStyle = {
      flexDirection: isUser ? 'row-reverse' : 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      borderRadius: 20,
      margin: 5,
      backgroundColor: isUser ? '#DCF8C5' : '#EAEAEA',
      flexWrap: 'wrap', // Додаємо можливість переносу тексту
    };
    const textStyle = {
      color: isUser ? 'black' : 'black',
    };

    return (
      <View style={messageStyle}>
        <Image
          source={{ uri: item.userImage }}
          style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={textStyle}>{`${item.sender}: ${item.message}`}</Text>
        </View>
      </View>
    );
  };


  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.messages}
          renderItem={this.renderMessage}
          keyExtractor={(item) => item.id}
        />
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderRadius: 20,
              marginRight: 10,
              padding: 8,
            }}
            placeholder="Ваше повідомлення"
            value={this.state.newMessage}
            onChangeText={(text) => this.setState({ newMessage: text })}
          />
          <TouchableOpacity
            style={{
              padding: 10,
              borderRadius: 20,
              backgroundColor: '#4285F4',
            }}
            onPress={this.handleSend}
          >
            <Text style={{ color: 'white' }}>Відправити</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ChatScreen;
