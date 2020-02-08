import React, { Component } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import {
  Container,
  Icon,
  Content
} from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import { color } from '../../Assets/Style/ColorList'

import { incrementValue, decrementValue } from '../../Redux/Actions'
import { connect } from 'react-redux'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: color.themaColor }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[color.themaColor, color.subThemaColor]}
            style={{
              borderBottomLeftRadius: 50,
              borderBottomRightRadius: 50
            }}>
            <View style={{
              paddingHorizontal: 20,
              paddingVertical: 60,
              flexDirection: 'row',
            }}>
              <View style={{
                flexDirection: 'row',
                backgroundColor: color.whiteColor,
                alignItems: 'center',
                width: '70%',
                borderRadius: 10
              }}>
                <Icon
                  type='MaterialCommunityIcons'
                  name='magnify'
                  style={{
                    color: color.themaColor,
                    paddingHorizontal: 5
                  }} />
                <TextInput
                  placeholder='Cari barang'
                  style={{
                    backgroundColor: color.whiteColor,
                    paddingVertical: 10
                  }} />
              </View>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
                width: '30%'
              }}>
                <Icon
                  type='MaterialCommunityIcons'
                  name='email-outline'
                  style={{
                    color: color.whiteColor,
                    paddingRight: 5
                  }} />
                <Icon
                  type='MaterialCommunityIcons'
                  name='heart-outline'
                  style={{
                    color: color.whiteColor,
                    paddingRight: 5
                  }} />
                <Icon
                  type='MaterialCommunityIcons'
                  name='bell-outline'
                  style={{
                    color: color.whiteColor,
                    paddingRight: 5
                  }} />
              </View>
            </View>
          </LinearGradient>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={[color.buttonColor, color.gradientColor1]}
            style={{
              paddingVertical: 80,
              marginHorizontal: 20,
              borderRadius: 20,
              top: -40
            }}>
          </LinearGradient>
          <View style={{
            paddingVertical: 20,
            paddingHorizontal: 20,
            flexDirection: 'row'
          }}>
            <View style={{ width: '50%' }}>
              <TouchableOpacity>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#654EB6', '#AF47B7']}
                  style={{
                    height: 150,
                    width: '95%',
                    borderRadius: 20,
                    marginBottom: 10,
                  }}>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={[color.buttonColor, color.gradientColor1]}
                  style={{
                    height: 100,
                    width: '95%',
                    borderRadius: 20,
                    marginBottom: 10
                  }}>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{ width: '50%' }}>
              <TouchableOpacity>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={[color.buttonColor, color.gradientColor1]}
                  style={{
                    height: 100,
                    width: '95%',
                    borderRadius: 20,
                    marginBottom: 10
                  }}>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#654EB6', '#AF47B7']}
                  style={{
                    height: 150,
                    width: '95%',
                    borderRadius: 20,
                    marginBottom: 10
                  }}>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}>
            <View style={{ width: '100%', flexDirection: 'row' }}>
              <TouchableOpacity style={{ width: '50%' }}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#654EB6', '#AF47B7']}
                  style={{
                    height: 150,
                    width: '95%',
                    borderRadius: 20,
                    marginBottom: 10,
                  }}>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '50%' }}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={[color.buttonColor, color.gradientColor1]}
                  style={{
                    height: 150,
                    width: '95%',
                    borderRadius: 20,
                    marginBottom: 10
                  }}>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
              <TouchableOpacity style={{ width: '50%' }}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#654EB6', '#AF47B7']}
                  style={{
                    height: 150,
                    width: '95%',
                    borderRadius: 20,
                    marginBottom: 10,
                  }}>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '50%' }}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={[color.buttonColor, color.gradientColor1]}
                  style={{
                    height: 150,
                    width: '95%',
                    borderRadius: 20,
                    marginBottom: 10
                  }}>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{
            paddingHorizontal: 20,
            paddingVertical: 20,
          }}>
            <View style={{ width: '100%', flexDirection: 'row' }}>
              <TouchableOpacity style={{ width: '50%' }}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#654EB6', '#AF47B7']}
                  style={{
                    height: 150,
                    width: '95%',
                    borderRadius: 20,
                    marginBottom: 10,
                  }}>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '50%' }}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={[color.buttonColor, color.gradientColor1]}
                  style={{
                    height: 150,
                    width: '95%',
                    borderRadius: 20,
                    marginBottom: 10
                  }}>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{ width: '100%', flexDirection: 'row' }}>
              <TouchableOpacity style={{ width: '50%' }}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={['#654EB6', '#AF47B7']}
                  style={{
                    height: 150,
                    width: '95%',
                    borderRadius: 20,
                    marginBottom: 10,
                  }}>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={{ width: '50%' }}>
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={[color.buttonColor, color.gradientColor1]}
                  style={{
                    height: 150,
                    width: '95%',
                    borderRadius: 20,
                    marginBottom: 10
                  }}>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value.value
  }
}

export default connect(
  mapStateToProps, { incrementValue, decrementValue }
)(HomeScreen)