# byte-buffer
## _offset
_offset(pos, offset) 获取vtable中的字段，返回在数值中的字段偏移

返回值：pos - 存储在offset处的int值
## _indirect
_indirect(offset) 检索存储在“offset”处的相对偏移量

返回值：offset + 存储在offset处的int值
## _vector
_vector(offset) 获取数组的开头，该数组的偏移量存储在此对象的“offset”处。

返回值：offset + 存储在offset处的int值 + int字节数(4)
## _vector_len
_vector_len(offset) 获取一个数组的长度，该向量的偏移量存储在此对象的“offset”处。

返回值：存储在(offset + 存储在offset处的int值) 处的int值
