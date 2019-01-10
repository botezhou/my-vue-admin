<template>
  <div class="formData">
    <div class="formTitle">
      <div class="primary" @click="goDragForm"><i class="fa fa-edit"></i>重新编辑</div>
      <div :style="{color: formData.color}"><i :class="'fa '+formData.icon"></i>{{formData.name}}</div>
      <div class="success" @click="submit"><i class="fa fa-save"></i>保存</div>
    </div>
    <div class="container" style="padding:30px;">
      <el-form ref="form" class="applyForm" label-width="120px" v-for="(item, index) in content" :key="index">
        <el-form-item :label="item.props.label" v-if="item.componentName == 'TextField'" :required="item.props.required">
          <el-input v-model="item.props.defaultValue" :placeholder="item.props.placeholder"></el-input>
        </el-form-item>
        <el-form-item :label="item.props.label" v-if="item.componentName == 'TextareaField'" :required="item.props.required">
          <el-input type="textarea" :rows="2" resize="none" v-model="item.props.defaultValue" :placeholder="item.props.placeholder"></el-input>
        </el-form-item>
        <el-form-item :label="item.props.label+'('+item.props.unit+')'" v-if="item.componentName == 'NumericField'" :required="item.props.required">
          <el-input type="number" v-model="item.props.defaultValue" :placeholder="item.props.placeholder"></el-input>
        </el-form-item>
        <el-form-item :label="item.props.label" v-if="item.componentName == 'RadioField'" :required="item.props.required">
          <el-radio-group v-model="item.props.defaultValue">
            <el-radio v-for="(option, index) in item.props.options" :key="index" :label="option">{{option}}</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item :label="item.props.label" v-if="item.componentName == 'CheckboxField'" :required="item.props.required">
          <el-checkbox-group v-model="item.props.defaultValue">
            <el-checkbox v-for="(option, index) in item.props.options" :key="index" :label="option" >{{option}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item :label="item.props.label" v-if="item.componentName == 'CalenderField'" :required="item.props.required">
          <el-date-picker v-if="item.props.format=='yyyy/MM/dd HH:mm'"
                          v-model="item.props.defaultValue"
                          align="right"
                          type="datetime"
                          value-format="yyyy/MM/dd HH:mm"
                          format="yyyy/MM/dd HH:mm"
                          placeholder="选择日期"
          >
          </el-date-picker>
          <el-date-picker v-if="item.props.format=='yyyy/MM/dd'"
                          v-model="item.props.defaultValue"
                          align="right"
                          type="date"
                          value-format="yyyy/MM/dd"
                          placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item :label="item.props.label" v-if="item.componentName == 'CalenderRangeField'" :required="item.props.required">
          <div class="f-left" v-if="item.props.format == 'yyyy/MM/dd'">
            <el-date-picker
              v-model="item.props.startTime"
              align="right"
              value-format="yyyy/MM/dd"
              type="date"
              :placeholder="item.props.startTimeLabel"
            >
            </el-date-picker>
          </div>
          <div class="f-left ml10" v-if="item.props.format == 'yyyy/MM/dd'" :required="item.props.required">
            <el-date-picker
              v-model="item.props.endTime"
              align="right"
              value-format="yyyy/MM/dd"
              type="date"
              :placeholder="item.props.endTimeLabel"
            >
            </el-date-picker>
          </div>
          <div class="f-left" v-if="item.props.format == 'yyyy/MM/dd HH:mm'" :required="item.props.required">
            <el-date-picker
              v-model="item.props.startTime"
              align="right"
              value-format="yyyy/MM/dd HH:mm"
              format="yyyy/MM/dd HH:mm"
              type="datetime"
              :placeholder="item.props.startTimeLabel"
            >
            </el-date-picker>
          </div>
          <div class="f-left ml10" v-if="item.props.format == 'yyyy/MM/dd HH:mm'" :required="item.props.required">
            <el-date-picker
              v-model="item.props.endTime"
              align="right"
              value-format="yyyy/MM/dd HH:mm"
              format="yyyy/MM/dd HH:mm"
              type="datetime"
              :placeholder="item.props.endTimeLabel"
            >
            </el-date-picker>
          </div>
          <div class="f-left ml10">
            <div><span>{{item.props.durationLabel}}：</span><el-input style="width:220px;" v-model="item.props.duration" :placeholder="item.props.unit"></el-input></div>
          </div>
        </el-form-item>
        <el-form-item :label="item.props.label" v-if="item.componentName == 'DescriptionField'" :required="item.props.required">
          <span>{{item.props.content}}</span>
        </el-form-item>
        <el-form-item :label="item.props.label" v-if="item.componentName == 'MoneyField'" :required="item.props.required">
          <el-input type="number" class="w220" v-model="item.props.defaultValue" :placeholder="item.props.placeholder"></el-input>
          {{parseFloat(item.props.defaultValue) | toUpcase}}
        </el-form-item>
        <el-form-item :label="item.props.label" v-if="item.componentName == 'ContactsField'" :required="item.props.required">
          <el-select style="width:100%;"
                     v-model="item.props.defaultValue"
                     :multiple="item.props.multiple"
          >
            <el-option
              v-for="item in userOption"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="item.props.label" v-if="item.componentName == 'DepartmentField'" :required="item.props.required">
          <el-select style="width:100%;"
                     v-model="item.props.defaultValue"
                     :multiple="item.props.multiple"
          >
            <el-option
              v-for="item in deptOption"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="item.props.label" v-if="item.componentName == 'SelectField'" :required="item.props.required">
          <el-select v-model="item.props.defaultValue" :placeholder="item.props.placeholder">
            <el-option v-for="(option, index) in item.props.options" :key="index" :label="option" :value="option"></el-option>
          </el-select>
        </el-form-item>
        <!-- 明细 -->

        <el-form-item :label="item.props.label" v-if="item.componentName == 'DetailField'">
          <div class="detailBox">
          <div class="detailTitle">
            <div>{{item.props.label}}{{item.props.index}}</div>
            <div class="blue" @click="delDetail(index)" v-if="addIndex>1"><i class="fa fa-trash"></i></div>
          </div>
          <el-form class="detailForm" label-width="120px" v-for="(child, i) in item.children" :key="i">
            <el-form-item :label="child.props.label" v-if="child.componentName == 'TextField'" :required="child.props.required">
              <el-input v-model="child.props.defaultValue" :placeholder="child.props.placeholder"></el-input>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'TextareaField'" :required="child.props.required">
              <el-input type="textarea" :rows="2" resize="none" v-model="child.props.defaultValue" :placeholder="child.props.placeholder"></el-input>
            </el-form-item>
            <el-form-item :label="child.props.label+'('+child.props.unit+')'" v-if="child.componentName == 'NumericField'" :required="child.props.required">
              <el-input type="number" v-model="child.props.defaultValue" :placeholder="child.props.placeholder"></el-input>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'RadioField'" :required="child.props.required">
              <el-radio-group v-model="child.props.defaultValue">
                <el-radio v-for="(option, index) in child.props.options" :key="index" :label="option">{{option}}</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'CheckboxField'" :required="child.props.required">
              <el-checkbox-group v-model="child.props.defaultValue">
                <el-checkbox v-for="(option, index) in child.props.options" :key="index" :label="option" >{{option}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'CalenderField'" :required="child.props.required">
              <el-date-picker v-if="child.props.format=='yyyy/MM/dd HH:mm'"
                              v-model="child.props.defaultValue"
                              align="right"
                              type="datetime"
                              value-format="yyyy/MM/dd HH:mm"
                              format="yyyy/MM/dd HH:mm"
                              placeholder="选择日期"
              >
              </el-date-picker>
              <el-date-picker v-if="child.props.format=='yyyy/MM/dd'"
                              v-model="child.props.defaultValue"
                              align="right"
                              type="date"
                              value-format="yyyy/MM/dd"
                              placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'CalenderRangeField'" :required="child.props.required">
              <div class="f-left" v-if="child.props.format == 'yyyy/MM/dd'">
                <el-date-picker
                  v-model="child.props.startTime"
                  align="right"
                  value-format="yyyy/MM/dd"
                  type="date"
                  :placeholder="child.props.startTimeLabel"
                >
                </el-date-picker>
              </div>
              <div class="f-left ml10" v-if="child.props.format == 'yyyy/MM/dd'">
                <el-date-picker
                  v-model="child.props.endTime"
                  align="right"
                  value-format="yyyy/MM/dd"
                  type="date"
                  :placeholder="child.props.endTimeLabel"
                >
                </el-date-picker>
              </div>
              <div class="f-left" v-if="child.props.format == 'yyyy/MM/dd HH:mm'">
                <el-date-picker
                  v-model="child.props.startTime"
                  align="right"
                  value-format="yyyy/MM/dd HH:mm"
                  format="yyyy/MM/dd HH:mm"
                  type="datetime"
                  :placeholder="child.props.startTimeLabel"
                >
                </el-date-picker>
              </div>
              <div class="f-left ml10" v-if="child.props.format == 'yyyy/MM/dd HH:mm'">
                <el-date-picker
                  v-model="child.props.endTime"
                  align="right"
                  value-format="yyyy/MM/dd HH:mm"
                  format="yyyy/MM/dd HH:mm"
                  type="datetime"
                  :placeholder="child.props.endTimeLabel"
                >
                </el-date-picker>
              </div>
              <div class="f-left ml10">
                <div><span>{{child.props.durationLabel}}：</span><el-input class="w220" v-model="child.props.duration" :placeholder="child.props.durationLabel"></el-input></div>
              </div>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'DescriptionField'" :required="child.props.required">
              <span>{{child.props.content}}</span>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'MoneyField'" :required="child.props.required">
              <el-input class="w220" type="number" v-model="child.props.defaultValue" :placeholder="child.props.placeholder"></el-input>
              {{parseFloat(child.props.defaultValue) | toUpcase}}
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'ContactsField'" :required="child.props.required">
              <el-select style="width:100%;"
                         v-model="child.props.defaultValue"
                         :multiple="child.props.multiple"
              >
                <el-option
                  v-for="item in userOption"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'DepartmentField'" :required="child.props.required">
              <el-select style="width:100%;"
                         v-model="child.props.defaultValue"
                         :multiple="child.props.multiple"
              >
                <el-option
                  v-for="item in deptOption"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'SelectField'" :required="child.props.required">
              <el-select v-model="child.props.defaultValue" :placeholder="child.props.placeholder">
                <el-option v-for="(option, index) in child.props.options" :key="index" :label="option" :value="option"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div class="addDetail blue" v-if="addIndex==item.props.index" @click="addDetailClick(index)"><i class="fa fa-plus"></i>{{item.props.addLabel}}</div>
          </div>
        </el-form-item>
        <!-- 套件解析 -->
        <div v-else>
          <div class="clearfix" v-if="item.componentName == 'CarSuite' || item.componentName == 'OfficeSuppliesSuite' || item.componentName == 'MeetRoomSuite' || item.componentName == 'LeaveSuite'">
            <el-form-item class="f-left" :label="item.children[0].props.label" :required="item.children[0].props.required">
              <el-select @change="selectChange" v-model="item.children[0].props.defaultValue" :placeholder="item.children[0].props.placeholder">
                <el-option v-for="(option, index) in options" :key="index" :label="option.name" :value="option.id"></el-option>
              </el-select>
            </el-form-item>
            <div class="recordBut f-left" v-if="recordButVisible&&item.children[0].props.defaultValue" @click="chakanClick">查看{{recordTitle}}</div>
          </div>
          <el-form class="detailForm" label-width="120px" v-for="(child, t) in item.children" :key="t">
            <el-form-item :label="child.props.label" v-if="child.componentName == 'TextField'" :required="child.props.required">
              <el-input v-model="child.props.defaultValue" :placeholder="child.props.placeholder"></el-input>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'TextareaField'" :required="child.props.required">
              <el-input type="textarea" :rows="2" resize="none" v-model="child.props.defaultValue" :placeholder="child.props.placeholder"></el-input>
            </el-form-item>
            <el-form-item :label="child.props.label+'('+child.props.unit+')'" v-if="child.componentName == 'NumericField'" :required="child.props.required">
              <el-input type="number" v-model="child.props.defaultValue" :placeholder="child.props.placeholder"></el-input>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'RadioField'" :required="child.props.required">
              <el-radio-group v-model="child.props.defaultValue">
                <el-radio v-for="(option, index) in child.props.options" :key="index" :label="option">{{option}}</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'CheckboxField'" :required="child.props.required">
              <el-checkbox-group v-model="child.props.defaultValue">
                <el-checkbox v-for="(option, index) in child.props.options" :key="index" :label="option" >{{option}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'CalenderField'" :required="child.props.required">
              <el-date-picker v-if="child.props.format=='yyyy/MM/dd HH:mm'"
                              v-model="child.props.defaultValue"
                              align="right"
                              type="datetime"
                              value-format="yyyy/MM/dd HH:mm"
                              format="yyyy/MM/dd HH:mm"
                              placeholder="选择日期"
              >
              </el-date-picker>
              <el-date-picker v-if="child.props.format=='yyyy/MM/dd'"
                              v-model="child.props.defaultValue"
                              align="right"
                              type="date"
                              value-format="yyyy/MM/dd"
                              placeholder="选择日期"
              >
              </el-date-picker>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'CalenderRangeField'" :required="child.props.required">
              <div class="f-left" v-if="child.props.format == 'yyyy/MM/dd'">
                <el-date-picker
                  v-model="child.props.startTime"
                  align="right"
                  value-format="yyyy/MM/dd"
                  type="date"
                  :placeholder="child.props.startTimeLabel"
                >
                </el-date-picker>
              </div>
              <div class="f-left ml10" v-if="child.props.format == 'yyyy/MM/dd'">
                <el-date-picker
                  v-model="child.props.endTime"
                  align="right"
                  value-format="yyyy/MM/dd"
                  type="date"
                  :placeholder="child.props.endTimeLabel"
                >
                </el-date-picker>
              </div>
              <div class="f-left" v-if="child.props.format == 'yyyy/MM/dd HH:mm'">
                <el-date-picker
                  v-model="child.props.startTime"
                  align="right"
                  value-format="yyyy/MM/dd HH:mm"
                  format="yyyy/MM/dd HH:mm"
                  type="datetime"
                  :placeholder="child.props.startTimeLabel"
                >
                </el-date-picker>
              </div>
              <div class="f-left ml10" v-if="child.props.format == 'yyyy/MM/dd HH:mm'">
                <el-date-picker
                  v-model="child.props.endTime"
                  align="right"
                  value-format="yyyy/MM/dd HH:mm"
                  format="yyyy/MM/dd HH:mm"
                  type="datetime"
                  :placeholder="child.props.endTimeLabel"
                >
                </el-date-picker>
              </div>
              <div class="f-left ml10">
                <div><span>时长：</span><el-input class="w220" v-model="child.props.duration" placeholder="参考格式（天/小时）"></el-input></div>
              </div>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'DescriptionField'" :required="child.props.required">
              <span>{{child.props.content}}</span>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'MoneyField'" :required="child.props.required">
              <el-input class="w220" type="number" v-model="child.props.defaultValue" :placeholder="child.props.placeholder"></el-input>
              {{parseFloat(child.props.defaultValue) | toUpcase}}
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'ContactsField'" :required="child.props.required">
              <el-select style="width:100%;"
                         v-model="child.props.defaultValue"
                         :multiple="child.props.multiple"
                <el-option
                  v-for="item in userOption"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item :label="child.props.label" v-if="child.componentName == 'DepartmentField'" :required="child.props.required">
              <el-select style="width:100%;"
                         v-model="child.props.defaultValue"
                         :multiple="child.props.multiple"

              >
                <el-option
                  v-for="item in deptOption"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id">
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item :label="child.props.label" v-if="child.componentName == 'SelectField' && t != 0" :required="child.props.required">
              <el-select v-model="child.props.defaultValue" :placeholder="child.props.placeholder">
                <el-option v-for="(option, index) in child.props.options" :key="index" :label="option" :value="option"></el-option>
              </el-select>
            </el-form-item>
            <!-- 套件明细 -->
            <el-form-item :label="child.props.label" v-if="child.componentName == 'DetailField'" :required="child.props.required">
              <div class="detailBox">
              <div class="detailTitle">
                <div>{{child.props.label}}{{child.props.index}}</div>
                <div class="blue" @click="deltjDetail(index, t)" v-if="addtjIndex>1"><i class="fa fa-trash"></i></div>
              </div>
              <el-form class="detailForm" label-width="120px" v-for="(tjChild, s) in child.children" :key="s">
                <el-form-item :label="tjChild.props.label" v-if="tjChild.componentName == 'TextField'" :required="tjChild.props.required">
                  <el-input v-model="tjChild.props.defaultValue" :placeholder="tjChild.props.placeholder"></el-input>
                </el-form-item>
                <el-form-item :label="tjChild.props.label" v-if="tjChild.componentName == 'TextareaField'" :required="tjChild.props.required">
                  <el-input type="textarea" :rows="2" resize="none" v-model="tjChild.props.defaultValue" :placeholder="tjChild.props.placeholder"></el-input>
                </el-form-item>
                <el-form-item :label="tjChild.props.label+'('+tjChild.props.unit+')'" v-if="tjChild.componentName == 'NumericField'" :required="tjChild.props.required">
                  <el-input type="number" v-model="tjChild.props.defaultValue" :placeholder="tjChild.props.placeholder"></el-input>
                </el-form-item>
                <el-form-item :label="tjChild.props.label" v-if="tjChild.componentName == 'RadioField'" :required="tjChild.props.required">
                  <el-radio-group v-model="tjChild.props.defaultValue">
                    <el-radio v-for="(option, index) in tjChild.props.options" :key="index" :label="option">{{option}}</el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item :label="tjChild.props.label" v-if="tjChild.componentName == 'CheckboxField'" :required="tjChild.props.required">
                  <el-checkbox-group v-model="tjChild.props.defaultValue">
                    <el-checkbox v-for="(option, index) in tjChild.props.options" :key="index" :label="option" >{{option}}</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item :label="tjChild.props.label" v-if="tjChild.componentName == 'CalenderField'" :required="tjChild.props.required">
                  <el-date-picker v-if="tjChild.props.format=='yyyy/MM/dd HH:mm'"
                                  v-model="tjChild.props.defaultValue"
                                  align="right"
                                  type="datetime"
                                  value-format="yyyy/MM/dd HH:mm"
                                  format="yyyy/MM/dd HH:mm"
                                  placeholder="选择日期"
                  >
                  </el-date-picker>
                  <el-date-picker v-if="tjChild.props.format=='yyyy/MM/dd'"
                                  v-model="tjChild.props.defaultValue"
                                  align="right"
                                  type="date"
                                  value-format="yyyy/MM/dd"
                                  placeholder="选择日期"
                  >
                  </el-date-picker>
                </el-form-item>
                <el-form-item :label="tjChild.props.label" v-if="tjChild.componentName == 'CalenderRangeField'" :required="tjChild.props.required">
                  <div class="f-left" v-if="tjChild.props.format == 'yyyy/MM/dd'">
                    <el-date-picker
                      v-model="tjChild.props.startTime"
                      align="right"
                      value-format="yyyy/MM/dd"
                      type="date"
                      :placeholder="tjChild.props.startTimeLabel"
                    >
                    </el-date-picker>
                  </div>
                  <div class="f-left ml10" v-if="tjChild.props.format == 'yyyy/MM/dd'">
                    <el-date-picker
                      v-model="tjChild.props.endTime"
                      align="right"
                      value-format="yyyy/MM/dd"
                      type="date"
                      :placeholder="tjChild.props.endTimeLabel"
                    >
                    </el-date-picker>
                  </div>
                  <div class="f-left" v-if="tjChild.props.format == 'yyyy/MM/dd HH:mm'">
                    <el-date-picker
                      v-model="tjChild.props.startTime"
                      align="right"
                      value-format="yyyy/MM/dd HH:mm"
                      format="yyyy/MM/dd HH:mm"
                      type="datetime"
                      :placeholder="tjChild.props.startTimeLabel"
                    >
                    </el-date-picker>
                  </div>
                  <div class="f-left ml10" v-if="tjChild.props.format == 'yyyy/MM/dd HH:mm'">
                    <el-date-picker
                      v-model="tjChild.props.endTime"
                      align="right"
                      value-format="yyyy/MM/dd HH:mm"
                      format="yyyy/MM/dd HH:mm"
                      type="datetime"
                      :placeholder="tjChild.props.endTimeLabel"
                    >
                    </el-date-picker>
                  </div>
                  <div class="f-left ml10">
                    <div><span>{{tjChild.props.durationLabel}}：</span><el-input class="w220" v-model="tjChild.props.duration" placeholder="参考格式（天/小时）"></el-input></div>
                  </div>
                </el-form-item>
                <el-form-item :label="tjChild.props.label" v-if="tjChild.componentName == 'DescriptionField'" :required="tjChild.props.required">
                  <span>{{tjChild.props.content}}</span>
                </el-form-item>
                <el-form-item :label="tjChild.props.label" v-if="tjChild.componentName == 'MoneyField'" :required="tjChild.props.required">
                  <el-input class="w220" type="number" v-model="tjChild.props.defaultValue" :placeholder="tjChild.props.placeholder"></el-input>
                  {{parseFloat(tjChild.props.defaultValue) | toUpcase}}
                </el-form-item>
                <el-form-item :label="tjChild.props.label" v-if="tjChild.componentName == 'ContactsField'" :required="tjChild.props.required">
                  <el-select style="width:100%;"
                             v-model="tjChild.props.defaultValue"
                             :multiple="tjChild.props.multiple"

                  >
                    <el-option
                      v-for="item in userOption"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item :label="tjChild.props.label" v-if="tjChild.componentName == 'DepartmentField'" :required="tjChild.props.required">
                  <el-select style="width:100%;"
                             v-model="tjChild.props.defaultValue"
                             :multiple="tjChild.props.multiple"
                  >
                    <el-option
                      v-for="item in deptOption"
                      :key="item.id"
                      :label="item.name"
                      :value="item.id">
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item :label="tjChild.props.label" v-if="tjChild.componentName == 'SelectField'" :required="tjChild.props.required">
                  <el-select v-model="tjChild.props.defaultValue" :placeholder="tjChild.props.placeholder">
                    <el-option v-for="(option, index) in tjChild.props.options" :key="index" :label="option" :value="option"></el-option>
                  </el-select>
                </el-form-item>
              </el-form>

              <div class="addDetail blue" v-if="addtjIndex==child.props.index" @click="addtjDetailClick(index, t)"><i class="fa fa-plus"></i>{{child.props.addLabel}}</div>
              </div>
            </el-form-item>
          </el-form>
        </div>
      </el-form>
    </div>
    <el-dialog
          title="提示"
          :visible.sync="dialogFormVisible"
          width="60%"
      >
      <form-detail :content="content"></form-detail>
      <span slot="footer" class="dialog-footer">
             <el-button @click="dialogFormVisible = false">取 消</el-button>
             <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </span>
    </el-dialog>

  </div>
</template>
<script type="text/javascript">
  import draggable from 'vuedraggable'
  import FormDetail from './formDetail'
  import { mapGetters } from 'vuex'
  export default {
    name: 'apply',
    components: {
      draggable,
      FormDetail
    },
    watch: {

    },
    data () {
      return {
        dialogFormVisible: false,
        deptOption: [
          {id: 1, name: '行政部'},
          {id: 2, name: '商务部'},
          {id: 3, name: '技术部'},
          {id: 4, name: '研发部'},
          {id: 5, name: '运维部'},
          {id: 6, name: '测试部'},
          {id: 7, name: '开发部'},
          {id: 8, name: '外联部'},
        ],
        userOption: [
          {id: 1, name: '周华健'},
          {id: 2, name: '王世豪'},
          {id: 3, name: '吴三桂'},
          {id: 4, name: '赵敏'},
          {id: 5, name: '钱小豪'},
          {id: 6, name: '宋伟'},
        ],
        formData: null,
        obj: {},
        loading: false,
        addIndex: 1,
        addtjIndex: 1,
        content: []
      }
    },
    created () {
      this.getFormData()
    },
    computed: {
      ...mapGetters([
        'themes',
      ])
    },
    methods: {
      // 获取申请表单
      getFormData () {
        const formData = this.themes.formdata;
        this.formData = JSON.parse(formData);
        const contents = this.formData.contents;
        this.content = contents
      },

      //重新编辑
      goDragForm() {
        this.$router.push('/dragForm')
      },
      // 删除明细
      delDetail (index) {
        console.log(index)
        this.addIndex--;
        this.content.splice(index, 1);
      },
      // 增加明细
      addDetailClick (index) {
        this.addIndex++;
        this.content.splice(index, 0, JSON.parse(JSON.stringify(this.content[index])));
        this.content[index+1].children.map(item => {
          if (typeof(item.props.id) == 'object') {
            const arrId = JSON.parse(JSON.stringify(item.props.id));
            let arr = [];
            arrId.map(id=> {
              id = id+ '-' + this.addtjIndex;
              arr.push(id)
            });
            item.props.id = arr;
          } else {
            item.props.id = item.props.id+'-'+this.addtjIndex;
          }
          item.props.defaultValue = '';
          item.props.checked = [];
          item.props.startTime = '';
          item.props.endTime = '';
          item.props.duration = '';
        })
        this.content[index+1].props.index = this.addIndex;
      },
      // 删除套件明细
      deltjDetail (index, t) {
        this.addtjIndex--;
        this.content[index].children.splice(t, 1);
      },
      // 增加套件明细
      addtjDetailClick (index, t) {
        this.addtjIndex++;
        this.content[index].children.splice(t, 0, JSON.parse(JSON.stringify(this.content[index].children[t])));
        this.content[index].children[(t+1)].children.map(item => {
          if (typeof(item.props.id) == 'object') {
            const arrId = JSON.parse(JSON.stringify(item.props.id));
            let arr = [];
            arrId.map(id=> {
              id = id+ '-' + this.addtjIndex;
              arr.push(id)
            });
            item.props.id = arr;
          } else {
            item.props.id = item.props.id+'-'+this.addtjIndex;
          }
          item.props.defaultValue = '';
          item.props.checked = [];
          item.props.startTime = '';
          item.props.endTime = '';
          item.props.duration = '';
        });
        this.content[index].children[(t+1)].props.index = this.addtjIndex
      },
      //提交表单
      submit() {
        this.dialogFormVisible = true
      }
    }
  }
</script>
<style lang="less" scoped>
  .formTitle{
    display: flex;
    justify-content: space-between;
    box-shadow: 2px 2px 2px #ccc;
    padding: 15px 20px;
    font-size: 14px;
    >div{
      cursor: pointer;
    }
    .primary{
      color: #409eff;
    }
    .success{
      color: #67c23a;
    }
    .fa{
      margin-right:6px;
    }
  }
  .detailBox{
    border:1px solid #ccc;
    margin-bottom:10px;
    .detailTitle{
      padding: 0 20px;
      background:#f1f1f1;
      display: flex;
      justify-content: space-between;
    }
    .detailForm{
      margin-top:15px;
      padding:0 20px;
    }
    .addDetail{
      text-align:center;
      font-size:14px;
      margin:10px auto;
    }
  }
  .blue{
    color:#409eff;
    cursor: pointer;
    .fa{
      margin-right:6px;
    }
  }
</style>
