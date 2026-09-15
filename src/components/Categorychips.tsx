import { StyleSheet, Text, View } from 'react-native';

const categories = [
  'Văn học',
  'Kinh tế',
  'Thiếu nhi',
  'Truyện tranh',
  'Ngoại ngữ',
  'Lịch sử',
];

const Categorychips = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Danh mục thể loại</Text>

      <View style={styles.chipBox}>
        {categories.map((item, index) => (
          <View key={index} style={styles.chip}>
            <Text style={styles.chipText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 18,
    alignItems: 'center',
  },

  title: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 14,
    color: '#111827',
  },

  chipBox: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap', // Cho phép các chip xuống dòng khi không còn đủ chỗ
    justifyContent: 'space-between',
    alignContent: 'flex-start',
    gap: 12,
    paddingVertical: 18,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#2A7BF6',
    borderStyle: 'dashed',
    borderRadius: 12,
  },

  chip: {
    width: '30%',
    height: 42,
    borderWidth: 1,
    borderColor: '#2A7BF6',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  chipText: {
    fontSize: 14,
    color: '#111827',
  },
});

export default Categorychips;