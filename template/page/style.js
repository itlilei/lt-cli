import { StyleSheet } from 'react-native';
import { px, pt, innerWidth, innerHeight } from '../../common/utils';

export default StyleSheet.create({
    container: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 100,
        elevation: 2000,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContainer: {
        position: 'absolute',
        zIndex: 101,
        // FIXED: 华为p10plus不居中
        width: innerWidth,
        height: innerHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    mask: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 102
    },
    innerContainer: {
        position: 'absolute',
        zIndex: 104,
        width: pt(291),
        maxHeight: pt(500),
        backgroundColor: '#fff',
        borderTopLeftRadius: pt(12),
        borderTopRightRadius: pt(12),
        borderBottomLeftRadius: pt(12),
        borderBottomRightRadius: pt(12)
    },
    dialogInner: {
        justifyContent: 'space-between'
    },
    content_color: {
        color: '#2E2D2D'
    },
    title: {
        fontSize: pt(16),
        paddingBottom: pt(7),
        fontWeight: '600'
    },
    main: {
        paddingLeft: pt(20),
        paddingRight: pt(20),
        paddingBottom: pt(20),
        // textAlign: 'center',
        fontSize: pt(14),
        lineHeight: pt(20)
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: pt(25)
    },
    btn_group: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: pt(18)
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: pt(112),
        height: pt(31),
        marginHorizontal: pt(10)
    },
    cancel_btn: {
        textAlign: 'center',
        paddingVertical: pt(9.5),

        borderWidth: px(2),
        borderRadius: pt(17),
        borderColor: '#F2270C'
    },
    cancel_text: {
        fontSize: pt(12),
        height: pt(31),
        lineHeight: pt(31),
        color: '#F2270C'
    },
    wrap: {
        width: pt(112),
        borderRadius: pt(17),
        overflow: 'hidden'
    },
    single: {
        width: pt(145)
    },
    sure_text: {
        fontSize: pt(12),
        color: '#fff'
    }
});
