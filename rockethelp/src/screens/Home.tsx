import { FlatList, Heading, HStack, IconButton, Text, useTheme, VStack, Center } from 'native-base';
import { ChatTeardropText, SignOut } from 'phosphor-react-native';
import { useState } from 'react';
import Logo from '../assets/logo_secondary.svg';
import { Button } from '../components/Button';
import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';

export function Home() {

    const [selectedStatus, setSelectedStatus] = useState<'open' | 'closed'>('open');
    const [orders, setOrders] = useState<OrderProps[]>([]);
        // {
        //     id: '123',
        //     patrimony: '123456',
        //     when: '18/07/2022 às 10:30',
        //     status: 'open'
        // },
        // {
        //     id: '456',
        //     patrimony: '456789',
        //     when: '19/07/2022 às 10:30',
        //     status: 'closed'
        // },
        // {
        //     id: '3',
        //     patrimony: '456789',
        //     when: '19/07/2022 às 10:30',
        //     status: 'closed'
        // },
        // {
        //     id: '4',
        //     patrimony: '456789',
        //     when: '19/07/2022 às 10:30',
        //     status: 'closed'
        // }

    // ])

    const { colors } = useTheme();

    return (
        <VStack flex={1} pb={6} bg="gray.700">
            <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                bg="gray.600"
                pt={12}
                pb={5}
                px={6}
            >
                <Logo />

                <IconButton 
                    icon={<SignOut size={26} color={colors.gray[300]}/>}
                />

            </HStack>

            <VStack flex={1} px={6}>
                <HStack w="full" mt={8} mb={4} justifyContent="space-between" alignItems="center">
                    <Heading color={colors.gray[100]}>Solicitações</Heading>
                    <Text color={colors.gray[200]}>3</Text>
                </HStack>
            
                <HStack 
                    space={3}
                    mb={8}
                >
                    <Filter 
                        title='Em Andamento'
                        isActive={selectedStatus === 'open'}
                        type='open'
                        onPress={() => setSelectedStatus('open')}
                    />
                    <Filter 
                        title='Finalizados'
                        isActive={selectedStatus === 'closed'}
                        type='closed'
                        onPress={() => setSelectedStatus('closed')}
                    />
                </HStack>

                <FlatList 
                    data={orders}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Order data={item} />}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 100 }}
                    ListEmptyComponent={() => (
                        <Center>
                            <ChatTeardropText 
                                color={colors.gray[300]}
                                size={40}
                            />
                            <Text
                                color={colors.gray[300]}
                                fontSize="xl"
                                mt={6}
                                textAlign="center"
                            >
                                Você ainda não possui {'\n'} chamados {selectedStatus === 'open' ? 'em andamento' : 'finalizados'}
                            </Text>
                        </Center>
                    )}
                />

                <Button 
                    title='Nova solicitação'
                />

            </VStack>

        </VStack>
    );
}