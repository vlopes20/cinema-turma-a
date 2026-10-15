import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.topRow}>
                <View style={styles.brandGroup}>
                    <View style={styles.logoBagde}>
                        <Ionicons name="film" size={22} color="#ff3366"></Ionicons>
                    </View>

                    <View>
                        <Text style={styles.brandTitle}>Cine<Text style={styles.brandHighlight}>App</Text></Text>
                        <Text style={styles.brandSubTitle}>Catalogo & Streaming</Text>
                    </View>
                </View>

                <View style={styles.userBagde}>
                    <Ionicons name="sparkles" size={16} color="#ffb800"></Ionicons>
                    <Text style={styles.userBagdeText}>Em alta</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 16
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'flex-start',
        alignItems: 'center'
    },
    brandGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    logoBagde: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 51, 102, 0.12)',
        borderWidth: 1,
        borderColor: 'rgba(255, 51, 102, 0.25)',
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center'
    },
    brandTitle: {
        fontSize: 24,
        fontWeight: '900',
        letterSpacing: 0.5,
        color: '#fff'

    },
    brandHighlight: {
        fontSize: 24,
        fontWeight: '900',
        letterSpacing: 0.5,
        color: '#ff3366'
    },
    brandSubTitle: {
        fontSize: 12,
        fontWeight: '500',
        color: '#94a3b8',
        marginTop: 2
    },
    userBagde: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
        backgroundColor: 'rgba(255, 184, 0, 0.12)',
        borderWidth: 1,
        borderBlockColor: 'rgba(255, 184, 0, 0.25)',
        borderRadius: 20,
        paddingHorizontal: 10, 
        paddingVertical: 6
    },
    userBagdeText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#ffb800'
    }

});