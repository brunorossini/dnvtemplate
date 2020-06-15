import styled from 'styled-components/native';

export const Item = styled.TouchableOpacity`
  flex: 1;
  color: #333333;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const Logo = styled.Image`
  border-radius: 4px;
  height: 85px;
  width: 85px;
  margin-right: 15px;
`;

export const Name = styled.Text`
  font-family: 'Eina03-SemiBold';
  font-size: 16px;
`;

export const ItemInfo = styled.View``;

export const Description = styled.Text`
  font-family: 'Eina03-Regular';
  font-size: 13px;
  color: #666;
`;

export const Stats = styled.Text`
  font-family: 'Eina03-Regular';
  font-size: 12px;
  color: #777;
`;
