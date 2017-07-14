/**
 * Created by woojin on 2017-07-14.
 */
// 필요한 것들 로딩하기
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },
    title: {
        type: String,
        default: '',
        trim: true,
        required: '제목은 반드시 입력하여야 합니다.'
    },
    content: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Comments', commentSchema);