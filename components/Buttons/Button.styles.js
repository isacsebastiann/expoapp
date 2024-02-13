import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 20,
    marginBottom: 12,
    elevation: 4, 
    borderRadius: 20,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 20, 
    borderRadius: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3, 
    shadowRadius: 4,   
  },
  buttonIcon: {
    paddingRight: 8, 
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
