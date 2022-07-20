import { VStack } from 'native-base';
import { Header } from '../components/Header';

export function Details() {
    return (
        <VStack
            flex={1} p={6} bg="gray.600"
        >
            <Header title="Solicitação" />

        </VStack>
    );
}