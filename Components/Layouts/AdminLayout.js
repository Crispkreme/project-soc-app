import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useSelector } from "react-redux";

const SidebarItem = ({ iconName, label, onPress }) => (
  <TouchableOpacity style={styles.sidebarItem} onPress={onPress}>
    <Icon name={iconName} size={24} color="#4A5568" style={styles.icon} />
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const AdminLayout = ({ children }) => {
  const user = { id: 1, name: "Admin" }; // Example user object
  const sidebarOpen = useSelector((state) => state.sidebar?.open || false); // Mock state

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      {sidebarOpen && (
        <View style={styles.sidebar}>
          <ScrollView>
            <SidebarItem
              iconName="dashboard"
              label="Dashboard"
              onPress={() => console.log("Navigate to Dashboard")}
            />
            <SidebarItem
              iconName="person-outline"
              label="Accounts"
              onPress={() => console.log("Navigate to Accounts")}
            />
            <SidebarItem
              iconName="medical-services"
              label="Medical"
              onPress={() => console.log("Navigate to Medical")}
            />
            <SidebarItem
              iconName="inventory"
              label="Inventories"
              onPress={() => console.log("Navigate to Inventories")}
            />
            <SidebarItem
              iconName="schedule"
              label="Scheduling"
              onPress={() => console.log("Navigate to Scheduling")}
            />
            <SidebarItem
              iconName="bar-chart"
              label="Data"
              onPress={() => console.log("Navigate to Data")}
            />
          </ScrollView>
        </View>
      )}

      {/* Main Content */}
      <View style={[styles.main, sidebarOpen ? styles.mainWithSidebar : null]}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>Welcome, {user.name}!</Text>
        </View>

        {/* Content */}
        <ScrollView style={styles.content}>{children}</ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#F8F9FA",
  },
  sidebar: {
    width: 250,
    backgroundColor: "#FFFFFF",
    padding: 10,
    borderRightWidth: 1,
    borderRightColor: "#E2E8F0",
  },
  sidebarItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 8,
    borderRadius: 4,
    backgroundColor: "#F7FAFC",
  },
  icon: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    color: "#2D3748",
  },
  main: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  mainWithSidebar: {
    marginLeft: 250, // Adjust for sidebar width
  },
  header: {
    padding: 10,
    backgroundColor: "#E2E8F0",
    borderBottomWidth: 1,
    borderBottomColor: "#CBD5E0",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    marginTop: 10,
  },
});

export default AdminLayout;
