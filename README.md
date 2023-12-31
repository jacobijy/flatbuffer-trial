# byte-buffer
## __offset
__offset(pos, offset) 在 vtable 中查找字段，返回对象的偏移量，如果该字段不存在则返回 0。

返回值：存储在(pos - 存储在offset处的int值)的int16值
## __indirect
__indirect(offset) 检索存储在“offset”处的相对偏移量

返回值：offset + 存储在offset处的int值
## __vector
__vector(offset) 获取数组的开头，该数组的偏移量存储在此对象的“offset”处。

返回值：offset + 存储在offset处的int值 + int字节数(4) (INT字节数是为了跳过vector_len数值)
## __vector_len
__vector_len(offset) 获取一个数组的长度，该向量的偏移量存储在此对象的“offset”处。

返回值：存储在(offset + 存储在offset处的int值) 处的int值

## __string
__string(offset, opt_encoding?)  编码默认utf18_string<br/>
offset = offset + read32(offset) <br/>
字符串长度为length = read32(offset) <br/>
跳过int32的字节数，即4个字节 offset += SIZEOF_INT <br/>
字符串字节流为utf8bytes = [0ffset, offset+ length] <br/>
根据编码转化成字符串

# vtable数据解析
## 设置开始偏移量raw_b_pos（默认为0）
创建对象开始偏移量，read32(raw_b_pos) + raw_b_pos, 默认即为read32(0)<br/>
personal_array为例，personal的b_pos 为0x000c 即12<br/>
offset初始为4，每个关键字offset+2<br/>
那么其初始关键字对应的值开始于_offset(b_pos, offset)<br/>
vtable 计算为 b_pos - read32(b_pos) = 12 - read32(12) = 6<br/>
offset < vtable时，有实际数据<br/>
offset >= vtable时，数据为0或者已无设定的关键字<br/>
获取的_offset为read16(vtable + offset) = read16(10) = 4<br/>
所以第一个关键字的数值开始于b_pos + _offset = 16 <br/>
以此类推

## 不同类型数据字节构成
### int
_offset 为0时，取默认值<br/>
不为0时 readUInt(b_pos + offset) int位数根据实际字节数

### string
__string(b_pos + offset)

### bool
相当于int8

### float
_offset 为0时，取默认值<br/>
不为0时 readFloat(b_pos + offset) float位数根据实际字节数

### vector
vector长度 length = __vector_len(b_pos + offset) <br/>
vector_offset 每个vector元素的间隔 对象类型，string等为4，数据类型根据实际数据占用字节数，如int8为1，int16为2<br/>
vector数据 index __vector(b_pos + offset) + vector_offset * index <br/>
然后根据实际数据类型对应的方式构建数据
