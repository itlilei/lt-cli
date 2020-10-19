import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';

import { JDText } from '@jdreact/jdreact-core-lib';
import Button from '../button';
import st from './st-index';

/**
 * Alert 弹框
 *
 * @param title （可选）  标题
 * @param modalShow （必填）  是否展示
 * @param overlayClickable（可选）  点击膜层后是否关闭对话框，默认是关闭的
 *
 */

export default class Alert extends PureComponent {
    render() {
        const {
            title,
            content,
            modalShow,
            overlayClickable,
            confirmText,
            cancelText,
            isShowCancel
        } = this.props;

        return (
            modalShow && <View style={st.container}>
                <View style={st.modalContainer}>
                    {/* 遮罩层 */}
                    {overlayClickable
                        ? <Touchable style={st.mask} onPress={this._onCancel} />
                        : <View style={st.mask} />}

                    {/* 弹框 */}
                    <View style={[st.innerContainer]}>
                        <View style={st.dialogInner}>
                            <View style={[st.content]}>
                                {/* 标题 */}
                                {!!title && <JDText style={[st.content_color, st.title]}>{title}</JDText>}

                                <JDText style={[st.content_color, st.main]}>{content}</JDText>
                            </View>

                            <View style={st.btn_group}>
                                {isShowCancel &&
                                <TouchableOpacity style={[st.btn, st.cancel_btn]} onPress={this._onCancel} >
                                    <JDText style={[st.cancel_text]}>{cancelText}</JDText>
                                </TouchableOpacity>}
                                <Button containerStyle={[st.btn]} contentStyle={[st.wrap, !isShowCancel && st.single]} onPress={this._onConfirm}>
                                    <JDText style={st.sure_text}>{confirmText}</JDText>
                                </Button>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }

    _onCancel = () => {
        if (this.props.onCancel) {
            this.props.onCancel();
            return;
        }
        this.props.onClose && this.props.onClose();
    }

    _onConfirm = () => {
        this.props.onConfirm && this.props.onConfirm();
    }
}

Alert.propTypes = {
    title: PropTypes.string,
    modalShow: PropTypes.bool,
    onConfirm: PropTypes.func, // 点击确定的回调方法
    onCancel: PropTypes.func, // 点击取消按钮的回调
    onClose: PropTypes.func,
    isShowCancel: PropTypes.bool, // 是否显示取消按钮
    cancelText: PropTypes.string, // 取消按钮文案
    confirmText: PropTypes.string, // 确定按钮文案
    content: PropTypes.string,
    overlayClickable: PropTypes.bool
};

Alert.defaultProps = {
    cancelText: '取消',
    confirmText: '确定',
    isShowCancel: false
};
